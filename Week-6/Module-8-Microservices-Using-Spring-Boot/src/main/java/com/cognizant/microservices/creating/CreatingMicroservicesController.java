package com.cognizant.microservices.creating;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service")
public class CreatingMicroservicesController {

    @GetMapping
    public Map<String, Object> createService() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Creating Microservices");
        response.put("message", "A Spring Boot application can become a small microservice quickly.");
        response.put("step", "Create a controller, add a REST endpoint, and run the app.");
        response.put("status", "Ready");
        return response;
    }
}
