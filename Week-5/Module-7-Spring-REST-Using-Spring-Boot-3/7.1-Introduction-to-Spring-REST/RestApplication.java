package com.cognizant.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Main Spring Boot Application Entry Point for Topic 7.1.
 * Demonstrates basic Spring REST application setup and simple REST endpoint.
 */
@SpringBootApplication
@RestController
public class RestApplication {

    public static void main(String[] args) {
        // Launches the Spring Boot application context
        SpringApplication.run(RestApplication.class, args);
        System.out.println("Spring REST Application Started Successfully!");
    }

    /**
     * Welcome Endpoint returning a simple introductory greeting.
     * 
     * @return Welcome message string
     */
    @GetMapping("/")
    public String welcomeMessage() {
        return "Welcome to Cognizant Deep Skilling Module 7: Introduction to Spring REST!";
    }

    /**
     * Info Endpoint showing basic REST API detail.
     * 
     * @return REST architecture info string
     */
    @GetMapping("/api/info")
    public String getRestInfo() {
        return "Spring REST APIs communicate over HTTP using JSON or XML data representations.";
    }
}
