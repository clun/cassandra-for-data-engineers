package com.dtsx.hotels.domain;

import org.springframework.data.cassandra.repository.CassandraRepository;

import java.util.UUID;

public interface HotelDetailsRepository extends CassandraRepository<HotelDetails, UUID> {}
