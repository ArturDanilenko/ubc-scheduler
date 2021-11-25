package com.ubcscheduler.ubcscheduler;

import com.ubcscheduler.ubcscheduler.utils.ScraperUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.io.IOException;
import java.util.ArrayList;

@SpringBootApplication
@EnableJpaAuditing
public class UbcSchedulerApplication {

	public static void main(String[] args) {
		SpringApplication.run(UbcSchedulerApplication.class, args);
	}

}
