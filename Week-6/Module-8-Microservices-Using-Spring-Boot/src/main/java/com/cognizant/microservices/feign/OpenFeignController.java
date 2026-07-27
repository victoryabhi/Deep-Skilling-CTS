package com.cognizant.microservices.feign;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/feign")
public class OpenFeignController {

    private final ProductClient productClient;

    public OpenFeignController(ProductClient productClient) {
        this.productClient = productClient;
    }

    @GetMapping
    public Map<String, Object> callFeign() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "OpenFeign");
        response.put("message", "Feign makes it easy to call another service.");
        response.put("remoteStatus", productClient.getHealth());
        response.put("note", "This example uses a sample URL from application.properties.");
        return response;
    }
}
