package com.cognizant.rest;

import java.util.List;
import java.util.Optional;

/**
 * Service interface defining business logic operations for Students.
 */
public interface StudentService {

    List<Student> getAllStudents();

    Optional<Student> getStudentById(Long id);

    Student createStudent(Student student);

    Student updateStudent(Long id, Student studentDetails);

    boolean deleteStudent(Long id);
}
