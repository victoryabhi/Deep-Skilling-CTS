package com.cognizant.microservices.gateway;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gateway")
public class ApiGatewayController {

    @GetMapping
    public Map<String, Object> gatewayMessage() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "API Gateway");
        response.put("message", "The gateway acts as a single entry point for clients.");
        response.put("benefit", "Clients call one address instead of many microservice URLs.");
        response.put("note", "This example keeps the design simple for study.");
        return response;
    }
}
