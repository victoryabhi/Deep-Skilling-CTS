# 7.5 CRUD Operations

## Objective
Implement complete Create, Read, Update, and Delete (CRUD) REST API endpoints backed by Spring Data JPA and layered architecture (`Controller -> Service -> Repository -> Database`).

## Key Technologies Used
- Java 17
- Spring Boot 3
- Spring Data JPA (`JpaRepository`)
- H2 In-Memory Database

## Implementation Details
- `Student.java`: JPA Entity class with JPA annotations (`@Entity`, `@Table`, `@Id`, `@GeneratedValue`).
- `StudentRepository.java`: Spring Data JPA interface.
- `StudentService.java`: Business service contract.
- `StudentServiceImpl.java`: Service implementation executing persistent operations.
- `StudentController.java`: Exposes REST endpoints (`GET`, `POST`, `PUT`, `DELETE`).

## Expected Output
- `GET /api/crud/students`: Lists all students (`200 OK`)
- `GET /api/crud/students/{id}`: Fetches specific student (`200 OK` or `404 Not Found`)
- `POST /api/crud/students`: Creates student entity (`201 Created`)
- `PUT /api/crud/students/{id}`: Updates existing student (`200 OK`)
- `DELETE /api/crud/students/{id}`: Removes student entity (`24 No Content`)
