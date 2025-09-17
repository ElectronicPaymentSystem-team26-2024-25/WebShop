package com.webshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.webshop.repository")
public class WebshopApplication {

	public static void main(String[] args) {
        System.out.println(System.getProperty("java.home"));
        SpringApplication.run(WebshopApplication.class, args);
	}

}
