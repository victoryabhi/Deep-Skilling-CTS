package com.cognizant.rest;

/**
 * Data Transfer Object (DTO) for Student API representation.
 * Excludes sensitive entity fields like SSN.
 */
public class StudentDTO {

    private Long id;
    private String name;
    private String email;
    private String course;

    public StudentDTO() {
    }

    public StudentDTO(Long id, String name, String email, String course) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.course = course;
    }

    // Static Mapper helper method to convert Entity to DTO
    public static StudentDTO fromEntity(Student student) {
        return new StudentDTO(
                student.getId(),
                student.getName(),
                student.getEmail(),
                student.getCourse()
        );
    }

    // Static Mapper helper method to convert DTO to Entity
    public Student toEntity() {
        return new Student(this.id, this.name, this.email, this.course, null);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
