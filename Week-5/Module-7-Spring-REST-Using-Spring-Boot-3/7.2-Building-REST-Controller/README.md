# 7.2 Building REST Controller

## Objective
To build a dedicated REST Controller component using `@RestController` and `@RequestMapping` to handle HTTP requests and return domain outputs.

## Key Technologies Used
- Java 17
- Spring Web (`@RestController`, `@RequestMapping`, `@GetMapping`)

## Implementation Details
- `StudentController.java`: Annotates class with `@RestController` and `@RequestMapping("/api/students")` to expose multiple endpoint paths (`/greet`, `/list`, `/course`).

## Expected Output
- `GET http://localhost:8080/api/students/greet`: `"Hello from StudentController! Building REST APIs with Spring Boot 3."`
- `GET http://localhost:8080/api/students/list`: `["Alex Morgan", "John Doe", "Priya Sharma", "Rahul Verma"]`
- `GET http://localhost:8080/api/students/course`: `"Cognizant Deep Skilling - Java Full Stack Engineering (FSE)"`
