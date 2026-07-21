package com.cognizant.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * REST Controller handling complex requests and standard HTTP responses.
 */
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {

    private final List<Student> studentList = new ArrayList<>();

    public StudentController() {
        // Sample initial data
        studentList.add(new Student(1L, "Alice Smith", "alice@cognizant.com", "Java FSE"));
        studentList.add(new Student(2L, "Bob Johnson", "bob@cognizant.com", "Spring Boot"));
    }

    /**
     * Get Student by Path Variable with ResponseEntity handling.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable("id") Long id) {
        return studentList.stream()
                .filter(s -> s.getId().equals(id))
                .findFirst()
                .map(student -> new ResponseEntity<>(student, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Search Students using Request Parameters (@RequestParam).
     */
    @GetMapping("/search")
    public ResponseEntity<List<Student>> searchByCourse(@RequestParam(value = "course", defaultValue = "Java FSE") String course) {
        List<Student> result = studentList.stream()
                .filter(s -> s.getCourse().equalsIgnoreCase(course))
                .toList();
        return ResponseEntity.ok(result);
    }

    /**
     * Create a new student using Request Body (@RequestBody) and status 201 Created.
     */
    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        student.setId((long) (studentList.size() + 1));
        studentList.add(student);
        return new ResponseEntity<>(student, HttpStatus.CREATED);
    }
}
