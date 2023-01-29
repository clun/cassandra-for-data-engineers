package com.dtsx.hotels.domain;

import org.springframework.data.cassandra.core.mapping.CassandraType;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

import java.util.UUID;

/**
 * CREATE TABLE IF NOT EXISTS hotels_by_location (
 *    country            text,
 *    city               text,
 *    uid                uuid,
 *    name               text,
 *    price              int,
 *    address            text,
 *    thumbnail          text,
 *    avg_rate           double,
 *    review_count       int,
 *    days_since_review  int,
 *    PRIMARY KEY ((country), city, uid)
 * );
 */
@Table("hotels_by_location")
public class HotelByLocation {

    @PrimaryKey
    private HotelByLocationPK key;

    @Column("name")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String name;

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

    @Column("review_count")
    @CassandraType(type = CassandraType.Name.INT)
    private int reviewCount;

    @Column("days_since_review")
    @CassandraType(type = CassandraType.Name.INT)
    private int daysSinceReview;

    public HotelByLocation() {
    }

    /**
     * Gets key
     *
     * @return value of key
     */
    public HotelByLocationPK getKey() {
        return key;
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
     * Gets reviewCount
     *
     * @return value of reviewCount
     */
    public int getReviewCount() {
        return reviewCount;
    }

    /**
     * Gets daysSinceReview
     *
     * @return value of daysSinceReview
     */
    public int getDaysSinceReview() {
        return daysSinceReview;
    }

    public HotelByLocation setKey(HotelByLocationPK key) {
        this.key = key;
        return this;
    }

    public HotelByLocation setName(String name) {
        this.name = name;
        return this;
    }

    public HotelByLocation setPrice(int price) {
        this.price = price;
        return this;
    }

    public HotelByLocation setAddress(String address) {
        this.address = address;
        return this;
    }

    public HotelByLocation setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }

    public HotelByLocation setAvgRate(double avgRate) {
        this.avgRate = avgRate;
        return this;
    }

    public HotelByLocation setReviewCount(int reviewCount) {
        this.reviewCount = reviewCount;
        return this;
    }

    public HotelByLocation setDaysSinceReview(int daysSinceReview) {
        this.daysSinceReview = daysSinceReview;
        return this;
    }
}

