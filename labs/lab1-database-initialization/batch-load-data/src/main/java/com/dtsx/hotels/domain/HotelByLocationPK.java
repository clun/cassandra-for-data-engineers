package com.dtsx.hotels.domain;

import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyClass;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyColumn;

import java.util.UUID;

/**
 * CREATE TABLE IF NOT EXISTS hotels_by_location (
 *    country            text,
 *    city               text,
 *    uid                uuid,
 *    ...
 *    PRIMARY KEY ((country), city, uid)
 * );
 */
@PrimaryKeyClass
public class HotelByLocationPK {

    @PrimaryKeyColumn(name = "country", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    private String country;

    @PrimaryKeyColumn(name = "city", ordinal = 1, type = PrimaryKeyType.CLUSTERED)
    private String city;

    @PrimaryKeyColumn(name = "uid", ordinal = 2, type = PrimaryKeyType.CLUSTERED)
    private UUID uid;

    public HotelByLocationPK() {
    }

    public HotelByLocationPK(String country, String city, UUID uid) {
        this.country = country;
        this.city = city;
        this.uid = uid;
    }

    /**
     * Gets country
     *
     * @return value of country
     */
    public String getCountry() {
        return country;
    }

    /**
     * Set value for country
     *
     * @param country
     *         new value for country
     */
    public void setCountry(String country) {
        this.country = country;
    }

    /**
     * Gets city
     *
     * @return value of city
     */
    public String getCity() {
        return city;
    }

    /**
     * Set value for city
     *
     * @param city
     *         new value for city
     */
    public void setCity(String city) {
        this.city = city;
    }

    /**
     * Gets uid
     *
     * @return value of uid
     */
    public UUID getUid() {
        return uid;
    }

    /**
     * Set value for uid
     *
     * @param uid
     *         new value for uid
     */
    public void setUid(UUID uid) {
        this.uid = uid;
    }
}
