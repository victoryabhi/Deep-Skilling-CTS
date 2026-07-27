package com.cognizant.microservices.deployment;

import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/deploy")
public class DeploymentController {

    @GetMapping
    public Map<String, Object> deployment() {
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("topic", "Microservices Deployment");
        response.put("message", "A microservice can be deployed independently after testing.");
        response.put("step", "Package it with Maven and run it in a container or server.");
        response.put("status", "Ready for deployment");
        return response;
    }
}
