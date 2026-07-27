package com.cognizant.microservices.introduction;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/intro")
public class IntroductionToMicroservicesController {

    @GetMapping
    public Map<String, Object> explainMicroservices() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Introduction to Microservices");
        response.put("idea", "Small services work independently and communicate over the network.");
        response.put("benefit", "Each service can scale and deploy separately.");
        response.put("example", "A shopping app may have separate services for products, orders, and payments.");
        response.put("note", "This is a beginner-friendly example for Week 6 learning.");
        return response;
    }
}
