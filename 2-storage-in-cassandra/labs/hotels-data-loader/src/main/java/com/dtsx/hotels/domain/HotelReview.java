package com.dtsx.hotels.domain;

import org.springframework.data.cassandra.core.mapping.CassandraType;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

/**
 * CREATE TABLE IF NOT EXISTS reviews_by_hotel (
 *    hotel_uid                   uuid,
 *    review_uid                  timeuuid,
 *    negative_review             text,
 *    negative_review_words       int,
 *    positive_review             text,
 *    positive_review_words       int,
 *    additional_scoring          double,
 *    reviewer_nationality        text,
 *    reviewer_score              double,
 *    reviewer_reviews_count      int,
 *    ..flags
 *    PRIMARY KEY ((hotel_uid), review_uid)
 * ) WITH CLUSTERING ORDER BY (review_uid DESC);
 */
@Table("reviews_by_hotel")
public class HotelReview {

    @PrimaryKey
    private HotelReviewPK key;

    @Column("negative_review")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String negativeReview;

    @Column("negative_review_words")
    @CassandraType(type = CassandraType.Name.INT)
    private int negativeReviewWordCount;

    @Column("positive_review")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String positiveReview;

    @Column("positive_review_words")
    @CassandraType(type = CassandraType.Name.INT)
    private int positiveReviewWordCount;

    @Column("additional_scoring")
    @CassandraType(type = CassandraType.Name.INT)
    private int additionalScoring;

    @Column("reviewer_nationality")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String reviewerNationality;

    @Column("reviewer_score")
    @CassandraType(type = CassandraType.Name.DOUBLE)
    private double reviewerScore;

    @Column("reviewer_reviews_count")
    @CassandraType(type = CassandraType.Name.INT)
    private int reviewer_reviewsCount;

    /**
     * Gets key
     *
     * @return value of key
     */
    public HotelReviewPK getKey() {
        return key;
    }

    /**
     * Gets negativeReview
     *
     * @return value of negativeReview
     */
    public String getNegativeReview() {
        return negativeReview;
    }

    /**
     * Gets negativeReviewWordCount
     *
     * @return value of negativeReviewWordCount
     */
    public int getNegativeReviewWordCount() {
        return negativeReviewWordCount;
    }

    /**
     * Gets positiveReview
     *
     * @return value of positiveReview
     */
    public String getPositiveReview() {
        return positiveReview;
    }

    /**
     * Gets positiveReviewWordCount
     *
     * @return value of positiveReviewWordCount
     */
    public int getPositiveReviewWordCount() {
        return positiveReviewWordCount;
    }

    /**
     * Gets additionalScoring
     *
     * @return value of additionalScoring
     */
    public double getAdditionalScoring() {
        return additionalScoring;
    }

    /**
     * Gets reviewerNationality
     *
     * @return value of reviewerNationality
     */
    public String getReviewerNationality() {
        return reviewerNationality;
    }

    /**
     * Gets reviewerScore
     *
     * @return value of reviewerScore
     */
    public double getReviewerScore() {
        return reviewerScore;
    }

    /**
     * Gets reviewer_reviewsCount
     *
     * @return value of reviewer_reviewsCount
     */
    public int getReviewer_reviewsCount() {
        return reviewer_reviewsCount;
    }

    public HotelReview setKey(HotelReviewPK key) {
        this.key = key;
        return this;
    }

    public HotelReview setNegativeReview(String negativeReview) {
        this.negativeReview = negativeReview;
        return this;
    }

    public HotelReview setNegativeReviewWordCount(int negativeReviewWordCount) {
        this.negativeReviewWordCount = negativeReviewWordCount;
        return this;
    }

    public HotelReview setPositiveReview(String positiveReview) {
        this.positiveReview = positiveReview;
        return this;
    }

    public HotelReview setPositiveReviewWordCount(int positiveReviewWordCount) {
        this.positiveReviewWordCount = positiveReviewWordCount;
        return this;
    }

    public HotelReview setAdditionalScoring(int additionalScoring) {
        this.additionalScoring = additionalScoring;
        return this;
    }

    public HotelReview setReviewerNationality(String reviewerNationality) {
        this.reviewerNationality = reviewerNationality;
        return this;
    }

    public HotelReview setReviewerScore(double reviewerScore) {
        this.reviewerScore = reviewerScore;
        return this;
    }

    public HotelReview setReviewer_reviewsCount(int reviewer_reviewsCount) {
        this.reviewer_reviewsCount = reviewer_reviewsCount;
        return this;
    }
}
