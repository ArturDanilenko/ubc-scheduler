package com.ubcscheduler.ubcscheduler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class UbcSchedulerApplication {

	public static void main(String[] args) {
		SpringApplication.run(UbcSchedulerApplication.class, args);
	}

}
