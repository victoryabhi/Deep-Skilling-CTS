# 7.1 Introduction to Spring REST

## Objective
To understand the fundamentals of building RESTful web services in Java using Spring Boot 3, `@SpringBootApplication`, and `@RestController`.

## Key Technologies Used
- Java 17
- Spring Boot 3
- Spring Web (`@RestController`, `@GetMapping`)

## Implementation Details
- `RestApplication.java`: Main entry point class configured with `@SpringBootApplication` and basic REST endpoints using `@RestController`.

## Expected Output
When running `RestApplication.java` and navigating to standard endpoints:
- `GET http://localhost:8080/`: Returns `"Welcome to Cognizant Deep Skilling Module 7: Introduction to Spring REST!"`
- `GET http://localhost:8080/api/info`: Returns information about Spring REST architecture.
