package com.dtsx.hotels.config;

import com.datastax.astra.sdk.AstraClient;
import com.datastax.oss.driver.api.core.CqlSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.cassandra.repository.config.EnableCassandraRepositories;

@Configuration
@EnableCassandraRepositories
public class AstraConfiguration {

    @Value("${astra.token}")
    private String token;

    @Value("${astra.keyspace}")
    private String keyspace;

    @Value("${astra.database-id}")
    private String databaseId;

    @Value("${astra.database-region}")
    private String databaseRegion;

    @Bean
    public AstraClient astraClient() {
        return AstraClient.builder()
                .withToken(token)
                .withCqlKeyspace(keyspace)
                .withDatabaseId(databaseId)
                .withDatabaseRegion(databaseRegion)
                .enableDownloadSecureConnectBundle()
                .enableCql()
                .build();
    }

    @Bean
    public CqlSession cqlSession(AstraClient astraClient) {
        return astraClient.cqlSession();
    }

}



