package com.cognizant.rest;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * OpenAPI (Swagger) Configuration class for Spring Boot 3 using Springdoc.
 */
@Configuration
public class SwaggerConfig {

    /**
     * Custom OpenAPI metadata bean definition.
     */
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Cognizant Deep Skilling Student REST API")
                        .version("1.0.0")
                        .description("Comprehensive RESTful Web Services API Documentation for Module 7 Assignment")
                        .contact(new Contact()
                                .name("Cognizant FSE Trainee")
                                .email("trainee@cognizant.com")
                                .url("https://github.com/Deep-Skilling-CTS"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://www.apache.org/licenses/LICENSE-2.0")));
    }
}
