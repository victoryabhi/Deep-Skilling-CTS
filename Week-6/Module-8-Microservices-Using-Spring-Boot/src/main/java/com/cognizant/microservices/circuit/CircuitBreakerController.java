package com.cognizant.microservices.circuit;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/circuit")
public class CircuitBreakerController {

    @GetMapping
    @CircuitBreaker(name = "demoService", fallbackMethod = "fallbackResponse")
    public Map<String, Object> circuit() {
        if (Math.random() < 0.5) {
            throw new RuntimeException("Simulated failure");
        }
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Circuit Breaker");
        response.put("message", "The circuit breaker protects the system from repeated failures.");
        response.put("status", "Service call succeeded");
        return response;
    }

    public Map<String, Object> fallbackResponse(RuntimeException ex) {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Circuit Breaker");
        response.put("message", "Fallback response executed because the service failed.");
        response.put("reason", ex.getMessage());
        return response;
    }
}
