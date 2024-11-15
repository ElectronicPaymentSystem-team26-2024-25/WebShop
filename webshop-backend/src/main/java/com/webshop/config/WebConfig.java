package com.webshop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")  // Applies to all endpoints
                        .allowedOrigins("http://localhost:5173")  // Allowed origin (your frontend)
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // HTTP methods
                        .allowedHeaders("*")  // Allow any headers
                        .allowCredentials(true);  // Allow cookies if needed
            }
        };
    }
}
