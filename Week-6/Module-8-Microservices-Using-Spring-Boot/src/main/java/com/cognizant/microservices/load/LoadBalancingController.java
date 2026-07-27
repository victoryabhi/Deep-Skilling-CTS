package com.cognizant.microservices.load;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/load")
public class LoadBalancingController {

    @GetMapping
    public Map<String, Object> loadBalance() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Load Balancing");
        response.put("message", "A load balancer distributes requests across service instances.");
        response.put("benefit", "It helps keep the system available and responsive.");
        response.put("note", "This is a simple beginner example.");
        return response;
    }
}
