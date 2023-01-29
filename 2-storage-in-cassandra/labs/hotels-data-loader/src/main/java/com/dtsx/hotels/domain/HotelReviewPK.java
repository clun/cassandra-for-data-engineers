package com.dtsx.hotels.domain;

import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.CassandraType;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyClass;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyColumn;

import java.util.UUID;

/**
 * CREATE TABLE IF NOT EXISTS reviews_by_hotel (
 *    hotel_uid                   uuid,
 *    review_uid                  timeuuid,
 *    ...
 *    PRIMARY KEY ((hotel_uid), review_uid)
 * ) WITH CLUSTERING ORDER BY (review_uid DESC);
 */
@PrimaryKeyClass
public class HotelReviewPK {

    @PrimaryKeyColumn(name = "hotel_uid", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    @CassandraType(type = CassandraType.Name.UUID)
    private UUID hotelId;

    @PrimaryKeyColumn(name = "review_uid", ordinal = 1, type = PrimaryKeyType.CLUSTERED)
    @CassandraType(type = CassandraType.Name.TIMEUUID)
    private UUID reviewId;

    public HotelReviewPK() {
    }

    public HotelReviewPK(UUID hotelId, UUID reviewId) {
        this.hotelId = hotelId;
        this.reviewId = reviewId;
    }
}
