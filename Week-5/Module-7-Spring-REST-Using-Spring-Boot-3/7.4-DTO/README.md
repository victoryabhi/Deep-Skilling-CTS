# 7.4 DTO (Data Transfer Object)

## Objective
Implement Data Transfer Objects (DTOs) to decouple API layer objects from internal database entities and hide sensitive data.

## Key Technologies Used
- Java 17
- Spring Web

## Implementation Details
- `Student.java`: Domain entity containing sensitive attributes (`ssn`).
- `StudentDTO.java`: Clean data transfer object containing public fields and static mapper utility methods (`fromEntity`, `toEntity`).

## Expected Output
API clients receive formatted JSON containing only non-sensitive fields (`id`, `name`, `email`, `course`) while sensitive internal data (`ssn`) remains encapsulated within internal entity layers.
