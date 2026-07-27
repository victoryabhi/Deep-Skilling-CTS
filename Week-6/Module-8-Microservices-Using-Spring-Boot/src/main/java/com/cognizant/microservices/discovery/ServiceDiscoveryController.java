package com.cognizant.microservices.discovery;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/discovery")
public class ServiceDiscoveryController {

    @GetMapping
    public Map<String, Object> discoverService() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Service Discovery");
        response.put("message", "Service discovery helps services find each other.");
        response.put("purpose", "It avoids hardcoding service addresses in the code.");
        response.put("example", "Eureka can register the service name and address.");
        return response;
    }
}
