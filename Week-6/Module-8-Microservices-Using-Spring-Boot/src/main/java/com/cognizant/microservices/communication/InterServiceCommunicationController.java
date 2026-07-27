package com.cognizant.microservices.communication;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/communication")
public class InterServiceCommunicationController {

    @GetMapping
    public Map<String, Object> communicate() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Inter-Service Communication");
        response.put("message", "Microservices communicate using HTTP or messaging.");
        response.put("example", "Service A may call Service B to fetch information.");
        response.put("status", "Simple demo completed");
        return response;
    }
}
