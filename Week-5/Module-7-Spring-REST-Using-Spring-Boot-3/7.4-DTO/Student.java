package com.cognizant.rest;

/**
 * Internal Domain Entity for Student.
 */
public class Student {

    private Long id;
    private String name;
    private String email;
    private String course;
    private String ssn; // Sensitive internal data not to be exposed via API

    public Student() {
    }

    public Student(Long id, String name, String email, String course, String ssn) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.course = course;
        this.ssn = ssn;
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

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }
}
