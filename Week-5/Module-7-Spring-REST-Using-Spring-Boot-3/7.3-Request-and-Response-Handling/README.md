# 7.3 Request and Response Handling

## Objective
Demonstrate proper handling of incoming HTTP requests using `@PathVariable`, `@RequestParam`, and `@RequestBody`, along with producing custom responses using `ResponseEntity` and HTTP status codes.

## Key Technologies Used
- Java 17
- Spring Web (`ResponseEntity`, `@PathVariable`, `@RequestParam`, `@RequestBody`, `HttpStatus`)

## Implementation Details
- `Student.java`: Domain model class.
- `StudentController.java`: Endpoints demonstrating URI path variables, query parameters, payload deserialization, and HTTP status codes (`200 OK`, `201 CREATED`, `404 NOT FOUND`).

## Expected Output
- `GET http://localhost:8080/api/v1/students/1`: Returns JSON object of student with HTTP 200 OK.
- `GET http://localhost:8080/api/v1/students/search?course=Java FSE`: Returns filtered array of students.
- `POST http://localhost:8080/api/v1/students`: Accepts JSON payload, returns created student with HTTP 201 CREATED.
