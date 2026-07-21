package com.cognizant.rest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA Repository interface for Student persistence.
 */
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
