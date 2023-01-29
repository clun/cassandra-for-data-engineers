package com.dtsx.hotels.domain;

import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.*;

import java.util.UUID;

/**
 * CREATE TABLE IF NOT EXISTS hotel_details (
 *    uid        uuid,
 *    name       text,
 *    country    text,
 *    city       text,
 *    price      int,
 *    address    text,
 *    thumbnail  text,
 *    longitude  double,
 *    latitude   double,
 *    avg_rate   double,
 *    PRIMARY KEY ((uid))
 * );
 */
@Table("hotel_details")
public class HotelDetails {

    @PrimaryKeyColumn(name = "uid", ordinal = 2, type = PrimaryKeyType.PARTITIONED)
    private UUID uid;

    @Column("name")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String name;

    @Column("country")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String country;

    @Column("city")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String city;

    @Column("price")
    @CassandraType(type = CassandraType.Name.INT)
    private int price;

    @Column("address")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String address;

    @Column("thumbnail")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String thumbnail;

    @Column("avg_rate")
    @CassandraType(type = CassandraType.Name.DOUBLE)
    private double avgRate;

    @Column("latitude")
    @CassandraType(type = CassandraType.Name.DOUBLE)
    private double latitude;

    @Column("longitude")
    @CassandraType(type = CassandraType.Name.DOUBLE)
    private double longitude;

    public HotelDetails() {
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
     * Gets name
     *
     * @return value of name
     */
    public String getName() {
        return name;
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
     * Gets city
     *
     * @return value of city
     */
    public String getCity() {
        return city;
    }

    /**
     * Gets price
     *
     * @return value of price
     */
    public int getPrice() {
        return price;
    }

    /**
     * Gets address
     *
     * @return value of address
     */
    public String getAddress() {
        return address;
    }

    /**
     * Gets thumbnail
     *
     * @return value of thumbnail
     */
    public String getThumbnail() {
        return thumbnail;
    }

    /**
     * Gets avgRate
     *
     * @return value of avgRate
     */
    public double getAvgRate() {
        return avgRate;
    }

    /**
     * Gets latitude
     *
     * @return value of latitude
     */
    public double getLatitude() {
        return latitude;
    }

    /**
     * Gets longitude
     *
     * @return value of longitude
     */
    public double getLongitude() {
        return longitude;
    }

    public HotelDetails setUid(UUID uid) {
        this.uid = uid;
        return this;
    }

    public HotelDetails setName(String name) {
        this.name = name;
        return this;
    }

    public HotelDetails setCountry(String country) {
        this.country = country;
        return this;
    }

    public HotelDetails setCity(String city) {
        this.city = city;
        return this;
    }

    public HotelDetails setPrice(int price) {
        this.price = price;
        return this;
    }

    public HotelDetails setAddress(String address) {
        this.address = address;
        return this;
    }

    public HotelDetails setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }

    public HotelDetails setAvgRate(double avgRate) {
        this.avgRate = avgRate;
        return this;
    }

    public HotelDetails setLatitude(double latitude) {
        this.latitude = latitude;
        return this;
    }

    public HotelDetails setLongitude(double longitude) {
        this.longitude = longitude;
        return this;
    }
}

