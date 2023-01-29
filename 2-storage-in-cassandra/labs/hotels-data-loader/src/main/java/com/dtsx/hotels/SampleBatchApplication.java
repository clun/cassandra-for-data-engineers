package com.dtsx.hotels;

import com.dtsx.hotels.jobs.PopulateHotelsFromStaging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Application as a Spring Boot Application
 */
@SpringBootApplication
public class SampleBatchApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SampleBatchApplication.class, args);
    }

    @Autowired
    public PopulateHotelsFromStaging job;

    @Override
    public void run(String... args) {
        System.exit(job.runJob());
    }
}