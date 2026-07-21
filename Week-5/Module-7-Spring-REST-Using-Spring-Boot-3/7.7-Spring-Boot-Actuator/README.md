# 7.7 Spring Boot Actuator

## Objective
Configure and inspect Spring Boot Actuator endpoints for production monitoring, health checks, application metrics, and metadata exposure.

## Key Technologies Used
- Spring Boot Actuator (`spring-boot-starter-actuator`)

## Implementation Details
- `application.properties`: Exposes management endpoints (`health`, `info`, `metrics`, `env`) and configures detailed health info and application metadata.

## Expected Output
- Navigate to `http://localhost:8080/actuator`: Displays available actuator links.
- `GET http://localhost:8080/actuator/health`: Returns application status (`UP`) and disk space/db health details.
- `GET http://localhost:8080/actuator/info`: Displays custom metadata (app name, description, version).
- `GET http://localhost:8080/actuator/metrics`: Provides JVM memory, threads, and HTTP request metrics.
