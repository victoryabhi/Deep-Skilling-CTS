package com.cognizant.microservices.config;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/config")
public class DistributedConfigController {

    @Value("${app.welcome.message}")
    private String welcomeMessage;

    @GetMapping
    public Map<String, Object> config() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Distributed Configuration");
        response.put("message", welcomeMessage);
        response.put("note", "Configuration values can be kept outside the code.");
        return response;
    }
}
