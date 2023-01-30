package com.dtsx.hotels.domain;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelReviewRepository extends CassandraRepository<HotelReview, HotelReviewPK> {}
