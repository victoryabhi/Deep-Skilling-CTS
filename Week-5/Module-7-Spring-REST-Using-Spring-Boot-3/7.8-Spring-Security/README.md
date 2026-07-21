# 7.8 Spring Security

## Objective
Configure Basic HTTP Authentication and Role-Based Access Control (RBAC) using Spring Security in Spring Boot 3 (`SecurityFilterChain`).

## Key Technologies Used
- Java 17
- Spring Security (`spring-boot-starter-security`)
- BCrypt Password Encoder

## Implementation Details
- `SecurityConfig.java`:
  - Configures `SecurityFilterChain` bean using Spring Boot 3 `HttpSecurity` lambda style syntax.
  - Defines In-Memory users (`user` with role `USER`, `admin` with role `ADMIN`).
  - Protects private endpoints while permitting public endpoints (`/`, `/actuator/**`, `/swagger-ui/**`).

## Expected Output
- Unauthenticated requests to protected endpoints return `401 Unauthorized`.
- Requests passing Basic Authentication header (`Authorization: Basic dXNlcjpwYXNzd29yZDEyMw==`) succeed (`200 OK`).
