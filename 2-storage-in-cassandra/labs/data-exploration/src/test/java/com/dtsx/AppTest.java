package com.dtsx;

import com.datastax.astra.sdk.AstraClient;
import com.datastax.oss.driver.api.core.CqlSession;
import com.datastax.oss.driver.api.core.CqlSessionBuilder;
import com.datastax.oss.driver.api.core.cql.*;
import org.junit.jupiter.api.Test;

import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

/**
 * Unit test for simple App.
 */
public class AppTest {

    @Test
    public void populateHotelPrices() {

        try(AstraClient astraClient = AstraClient.builder()
                .withToken("AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b")
                .withCqlKeyspace("data_exploration")
                .withDatabaseId("f861e773-ab1b-4313-bf3c-8a47412c9ecd")
                .withDatabaseRegion("us-east1")
                .enableCql()
                .build()) {

            PreparedStatement ps = astraClient.cqlSession().prepare("" +
                    "UPDATE hotels_by_city SET hotel_price = ? " +
                    "WHERE country=? AND city=? AND rate=? AND hotel_name=?");

            int count =0;
            ResultSet rs = astraClient.cqlSession().execute("SELECT * FROM hotels_by_city");
            for(Row row : rs.all()) {
                int scale = (int) Math.pow(10, 1);
                int price = Double.valueOf((Math.round(Math.random() * 400 * scale) / scale)).intValue();

                count++;
                if (count % 100 == 0) System.out.println(count);
                astraClient.cqlSession().execute(ps.bind(price,
                        row.getString("country"),
                        row.getString("city"),
                        row.getDouble("rate"),
                        row.getString("hotel_name")));
            }
        }
    }

    @Test
    public void populateHotelByCity() {
        try(AstraClient astraClient = AstraClient.builder()
                .withToken("AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b")
                .withCqlKeyspace("data_exploration")
                .withDatabaseId("f861e773-ab1b-4313-bf3c-8a47412c9ecd")
                .withDatabaseRegion("us-east1")
                .enableCql()
                .build()) {

            PreparedStatement ps = astraClient.cqlSession().prepare("" +
                    "INSERT INTO hotels_by_city (country, city, rate, hotel_name, hotel_address) " +
                    "VALUES (?,?,?,?,?)");

            // Get 10000 of records
            ResultSet rs = astraClient.cqlSession().execute("SELECT hotel_name,hotel_address FROM staging_hotel_reviews LIMIT 10000");

            int count =0;
            for(Row row : rs.all()) {
                List<String> address = Arrays.asList(row.getString("hotel_address").split(" "));
                 if (address.size() > 4) {
                    String country = address.get(address.size()-1);
                    String city = address.get(address.size()-2) ;
                    if ("Kingdom".equalsIgnoreCase(country)) {
                        country = address.get(address.size()-2) + " " + country;
                        city = "London";
                    }
                    count++;
                    if (count % 100 == 0) System.out.println(count);


                     int scale = (int) Math.pow(10, 1);
                     double rate = (double) Math.round(Math.random() * 5 * scale) / scale;
                    astraClient.cqlSession().execute(ps.bind(country, city,
                            rate,
                            row.getString("hotel_name"),
                            row.getString("hotel_address")));
                }
            }
        }

    }
}
