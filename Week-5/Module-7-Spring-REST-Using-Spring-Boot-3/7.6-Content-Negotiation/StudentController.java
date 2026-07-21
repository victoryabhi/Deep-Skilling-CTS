package com.cognizant.rest;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

/**
 * REST Controller demonstrating Content Negotiation supporting JSON and XML data formats.
 */
@RestController
@RequestMapping("/api/content")
public class StudentController {

    /**
     * Endpoint producing both JSON and XML representations based on HTTP 'Accept' Header.
     */
    @GetMapping(
            value = "/student/{id}",
            produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }
    )
    public ResponseEntity<StudentDTO> getStudent(@PathVariable Long id) {
        StudentDTO student = new StudentDTO(id, "Sarah Jenkins", "sarah@cognizant.com", "Cloud Native Java");
        return ResponseEntity.ok(student);
    }

    /**
     * Endpoint producing a list of students in JSON or XML formats.
     */
    @GetMapping(
            value = "/students",
            produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }
    )
    public ResponseEntity<List<StudentDTO>> getAllStudents() {
        List<StudentDTO> list = Arrays.asList(
                new StudentDTO(101L, "David Miller", "david@cognizant.com", "Microservices"),
                new StudentDTO(102L, "Emma Watson", "emma@cognizant.com", "Spring Boot 3")
        );
        return ResponseEntity.ok(list);
    }

    /**
     * Endpoint consuming both JSON and XML payloads based on HTTP 'Content-Type' Header.
     */
    @PostMapping(
            value = "/student",
            consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE },
            produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }
    )
    public ResponseEntity<StudentDTO> createStudent(@RequestBody StudentDTO student) {
        // Echo back created student representation
        return ResponseEntity.ok(student);
    }
}
