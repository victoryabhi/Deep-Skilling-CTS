# 7.10 API Documentation

## Objective
Integrate OpenAPI 3 and Swagger UI into Spring Boot 3 using `springdoc-openapi` for automated REST API documentation and interactive testing.

## Key Technologies Used
- Java 17
- Spring Boot 3
- `springdoc-openapi-starter-webmvc-ui` (v2.3.0)

## Implementation Details
- `SwaggerConfig.java`: Configures custom `OpenAPI` bean defining API titles, descriptions, contact info, and licensing details.

## Expected Output
- Interactive Swagger UI Dashboard: `http://localhost:8080/swagger-ui/index.html`
- Raw OpenAPI JSON Specifications: `http://localhost:8080/v3/api-docs`
