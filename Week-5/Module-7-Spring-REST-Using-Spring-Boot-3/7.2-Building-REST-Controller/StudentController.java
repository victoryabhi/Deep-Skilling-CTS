package com.cognizant.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

/**
 * REST Controller demonstrating basic student API mappings.
 */
@RestController
@RequestMapping("/api/students")
public class StudentController {

    /**
     * Endpoint to fetch a simple greeting from controller.
     * 
     * @return Greeting text message
     */
    @GetMapping("/greet")
    public String getGreeting() {
        return "Hello from StudentController! Building REST APIs with Spring Boot 3.";
    }

    /**
     * Endpoint to fetch a sample list of student names.
     * 
     * @return List of student names
     */
    @GetMapping("/list")
    public List<String> getStudentList() {
        // Simulating data retrieval of student names
        return Arrays.asList("Alex Morgan", "John Doe", "Priya Sharma", "Rahul Verma");
    }

    /**
     * Endpoint returning course information for students.
     * 
     * @return Course description string
     */
    @GetMapping("/course")
    public String getCourseInfo() {
        return "Cognizant Deep Skilling - Java Full Stack Engineering (FSE)";
    }
}
