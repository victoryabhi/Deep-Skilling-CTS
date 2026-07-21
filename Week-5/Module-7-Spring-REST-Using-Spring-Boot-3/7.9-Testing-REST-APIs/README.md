# 7.9 Testing REST APIs

## Objective
Perform sliced unit testing of Spring REST Controllers using JUnit 5, Spring Boot Test (`@WebMvcTest`), `MockMvc`, and Mockito.

## Key Technologies Used
- JUnit 5 (`org.junit.jupiter.api.*`)
- Spring Boot Starter Test (`@WebMvcTest`, `MockMvc`)
- Mockito (`@MockBean`, `BDDMockito`)

## Implementation Details
- `StudentControllerTest.java`: Uses `@WebMvcTest` to isolate Web layer controller test scenarios, mocking service dependencies (`StudentService`) and asserting JSON payload expectations with `jsonPath()`.

## Expected Output
- Running `mvn test` executes unit tests with 100% pass status:
  - `testGetStudentByIdSuccess()` -> PASSED
  - `testGetAllStudents()` -> PASSED
  - `testCreateStudent()` -> PASSED
