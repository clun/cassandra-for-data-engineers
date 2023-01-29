package com.dtsx.hotels.jobs;

import com.datastax.oss.driver.api.core.ConsistencyLevel;
import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.cql.Row;
import com.datastax.oss.driver.api.core.cql.SimpleStatement;
import com.datastax.oss.driver.api.core.uuid.Uuids;
import com.dtsx.hotels.domain.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.util.*;

@Service
public class PopulateHotelsFromStaging {

    /** Logger. */
    private static Logger LOGGER = LoggerFactory.getLogger(PopulateHotelsFromStaging.class);

    @Autowired
    CqlSession cqlSession;

    @Autowired
    HotelByLocationRepository hotelByLocationRepository;

    @Autowired
    HotelDetailsRepository hotelDetailsRepository;

    @Autowired
    HotelReviewRepository hotelReviewRepository;

    public int runJob() {
        LOGGER.info("Start import JOB");
        // Source
        SimpleStatement ss = SimpleStatement.newInstance("SELECT * FROM staging_hotel_reviews");
        ss = ss.setPageSize(200);
        ss = ss.setConsistencyLevel(ConsistencyLevel.ONE);

        // Cache for hotels NAME => Hotels (deduplication)
        Map<String, HotelDetails> hotelsCache = new HashMap<>();
        Map<String, Set<String>> cacheLocations = new HashMap<>();

        long count = 0;
        for (Row row: cqlSession.execute(ss)) {
            String hotelName = getHotelName(row);
            count++;
            if (count % 100 == 0) {
                LOGGER.info("{} rows processed, hotel_count={}", count, hotelsCache.size());
                LOGGER.info("locations={}", cacheLocations);
            }
            if (!hotelsCache.containsKey(hotelName)) {
                HotelDetails hotelDetails = getHotelDetails(row);
                // Generating a unique identifier for the hotel
                hotelDetails.setUid(UUID.randomUUID());
                // Generating a price for the room in between 50 and 400
                hotelDetails.setPrice(Double.valueOf(50 + (Math.round(Math.random() * 350))).intValue());
                // Batch Statement cross partition with Spring data
                //CassandraBatchOperations batch = cassandraTemplate.batchOps(BatchType.LOGGED);
                //batch.insert(hotelDetails, mapHotelByLocation(hotelDetails, row));
                //batch.execute();

                // Without batch -->
                hotelDetailsRepository.save(hotelDetails);
                hotelByLocationRepository.save(mapHotelByLocation(hotelDetails, row));
                // <--
                hotelsCache.put(hotelName, hotelDetails);
                if (!cacheLocations.containsKey(hotelDetails.getCountry())) {
                    cacheLocations.put(hotelDetails.getCountry(), new HashSet<>());
                }
                cacheLocations.get(hotelDetails.getCountry()).add(hotelDetails.getCity());
            }
            // Accessing detail from cache (as post-processing happened)
            HotelDetails details = hotelsCache.get(hotelName);
            // Mapping for the review
            HotelReview  review  = mapHotelReview(details, row);
            // Save the Review
            hotelReviewRepository.save(review);
        }
        return 0;
    }

    /**
     * Map Row to {@link HotelDetails}.
     *
     * @param row
     *      current db row
     * @return
     *      hotel details
     */
    private HotelDetails getHotelDetails(Row row) {
        HotelDetails hd = new HotelDetails();
        hd.setName(getHotelName(row));
        hd.setAddress(row.getString("hotel_address"));
        hd.setAvgRate(row.getDouble("average_score"));
        String country = null;
        String city = null;
        List<String> address = Arrays.asList(hd.getAddress().split(" "));
        if (address.size() > 4) {
            country = address.get(address.size() - 1);
            city = address.get(address.size() - 2);
            if ("Kingdom".equalsIgnoreCase(country)) {
                country = address.get(address.size() - 2) + " " + country;
                city = "London";
            }
        }
        hd.setCountry(country);
        hd.setCity(city);
        hd.setLongitude(row.getDouble("longitude"));
        hd.setLatitude(row.getDouble("latitude"));
        return hd;
    }

    /**
     * Map Hotel for hotel Location.
     * @param details
     *      details
     * @param row
     *      current row
     * @return
     *      hotel location
     */
    private HotelByLocation mapHotelByLocation(HotelDetails details, Row row) {
        HotelByLocation hbl = new HotelByLocation();
        hbl.setKey(new HotelByLocationPK(details.getCountry(), details.getCity(), details.getUid()));
        hbl.setPrice(details.getPrice());
        hbl.setThumbnail(details.getThumbnail());
        hbl.setName(details.getName());
        hbl.setAddress(details.getAddress());
        hbl.setAvgRate(details.getAvgRate());
        String daysSinceReview = row.getString("days_since_review");
        if (daysSinceReview != null) {
            daysSinceReview = daysSinceReview.replaceAll("days", "");
            daysSinceReview = daysSinceReview.replaceAll("day", "");
            daysSinceReview = daysSinceReview.trim();
            hbl.setDaysSinceReview(Integer.parseInt(daysSinceReview));
        }
        hbl.setReviewCount(row.getInt("total_number_of_reviews"));
        return hbl;
    }

    /**
     * Parse hotel Name (data quality)
     *
     * @param row
     *      current row
     * @return
     *      hotel name
     */
    private String getHotelName(Row row) {
        String hotelName = row.getString("hotel_name");
        if (hotelName != null) {
            hotelName = hotelName.replaceAll("H tel", "Hotel");
            hotelName = hotelName.replaceAll("H tel", "Hotel");
        }
        return hotelName;
    }

    /**
     * Map to review now.
     *
     * @param details
     *      hotel details
     * @param row
     *      current row
     * @return
     *      hotel review
     */
    private HotelReview mapHotelReview(HotelDetails details, Row row) {
        HotelReview hr = new HotelReview();
        hr.setKey(new HotelReviewPK(details.getUid(), Uuids
                .startOf(row.getLocalDate("review_date")
                            .atStartOfDay(ZoneId.systemDefault())
                            .toEpochSecond())));
        hr.setAdditionalScoring(row.getInt("additional_number_of_scoring"));
        hr.setNegativeReview(row.getString("negative_review"));
        hr.setNegativeReviewWordCount(row.getInt("review_total_negative_word_counts"));
        hr.setPositiveReview(row.getString("positive_review"));
        hr.setPositiveReviewWordCount(row.getInt("review_total_positive_word_counts"));
        hr.setReviewer_reviewsCount(row.getInt("total_number_of_reviews_reviewer_has_given"));
        hr.setReviewerScore(row.getDouble("reviewer_score"));
        hr.setReviewerNationality(row.getString("reviewer_nationality"));
        return hr;
    }
}
