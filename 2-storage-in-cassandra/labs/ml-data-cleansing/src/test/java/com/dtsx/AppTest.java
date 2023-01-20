package com.dtsx;

import com.datastax.astra.sdk.AstraClient;
import com.datastax.oss.driver.api.core.cql.*;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

/**
 * Unit test for simple App.
 */
public class AppTest {

    @Test
    public void rowTest() {
        try(AstraClient astraClient = AstraClient.builder()
                .withToken("AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b")
                .withCqlKeyspace("data_exploration")
                .withDatabaseId("f861e773-ab1b-4313-bf3c-8a47412c9ecd")
                .withDatabaseRegion("us-east1")
                .enableCql()
                .build()) {

            astraClient.cqlSession().execute("SELECT * FROM "

        }
    }
    @Test
    public void test() {
        try(AstraClient astraClient = AstraClient.builder()
                .withToken("AstraCS:RSgxJhDafxyQxYZtEwnUPYzU:847c6f5e4150261beed6cf01568283a9a25c29e2ea5c9ed51672e48b15e6951b")
                .withCqlKeyspace("data_exploration")
                .withDatabaseId("f861e773-ab1b-4313-bf3c-8a47412c9ecd")
                .withDatabaseRegion("us-east1")
                .enableCql()
                .build()) {

            ResultSet rs = astraClient.cqlSession().execute("SELECT hotel_name,hotel_address FROM staging_hotel_reviews LIMIT 10000");
            PreparedStatement ps = astraClient.cqlSession().prepare("" +
                    "INSERT INTO hotels_by_city (country, city, hotel_name, hotel_address) " +
                    "VALUES (?,?,?,?)");
            int count =0;

            for (Iterator<ColumnDefinition> it = rs.getColumnDefinitions().iterator(); it.hasNext(); ) {
                ColumnDefinition cd = it.next();
                cd.


            }

            for(Row row : rs.all()) {



                List<String> address = Arrays.asList(row.getString("hotel_address").split(" "));
                 if (address.size() > 4) {
                    String country = address.get(address.size()-1);
                    String city = address.get(address.size()-2) ;
                    if ("Kingdom".equalsIgnoreCase(country)) {
                        country = address.get(address.size()-2) + " " + country;
                        city = "London";
                    }
                    if (count % 100 == 0) System.out.println(count);
                    astraClient.cqlSession().execute(ps.bind(country, city,
                            row.getString("hotel_name"),
                            row.getString("hotel_address")));
                }
            }
        }

    }
}
