package com.cognizant.microservices.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "demo-service", url = "${inventory.service.url}")
public interface ProductClient {

    @GetMapping("/health")
    String getHealth();
}
