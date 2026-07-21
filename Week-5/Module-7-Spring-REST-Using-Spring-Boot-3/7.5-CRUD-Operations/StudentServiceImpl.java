package com.cognizant.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Implementation of StudentService performing CRUD operations using StudentRepository.
 */
@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;

    @Autowired
    public StudentServiceImpl(StudentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @Override
    public Optional<Student> getStudentById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Student createStudent(Student student) {
        return repository.save(student);
    }

    @Override
    public Student updateStudent(Long id, Student studentDetails) {
        return repository.findById(id).map(existing -> {
            existing.setName(studentDetails.getName());
            existing.setEmail(studentDetails.getEmail());
            existing.setCourse(studentDetails.getCourse());
            return repository.save(existing);
        }).orElse(null);
    }

    @Override
    public boolean deleteStudent(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
