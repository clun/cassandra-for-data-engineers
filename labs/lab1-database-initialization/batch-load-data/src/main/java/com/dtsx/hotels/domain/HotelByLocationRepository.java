package com.dtsx.hotels.domain;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelByLocationRepository extends CassandraRepository<HotelByLocation, HotelByLocationPK> {}
