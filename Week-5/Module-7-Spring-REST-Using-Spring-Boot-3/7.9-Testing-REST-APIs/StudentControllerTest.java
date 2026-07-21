package com.cognizant.rest;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * JUnit 5 and MockMvc Unit Test for StudentController.
 */
@WebMvcTest(StudentController.class)
public class StudentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentService studentService;

    private Student sampleStudent;

    @BeforeEach
    void setUp() {
        sampleStudent = new Student(1L, "Alice Morgan", "alice@cognizant.com", "Java FSE");
    }

    @Test
    @WithMockUser
    @DisplayName("GET /api/crud/students/1 should return student details")
    void testGetStudentByIdSuccess() throws Exception {
        given(studentService.getStudentById(1L)).willReturn(Optional.of(sampleStudent));

        mockMvc.perform(get("/api/crud/students/1")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Alice Morgan"))
                .andExpect(jsonPath("$.email").value("alice@cognizant.com"));
    }

    @Test
    @WithMockUser
    @DisplayName("GET /api/crud/students should return all students list")
    void testGetAllStudents() throws Exception {
        given(studentService.getAllStudents()).willReturn(Arrays.asList(sampleStudent));

        mockMvc.perform(get("/api/crud/students"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].name").value("Alice Morgan"));
    }

    @Test
    @WithMockUser
    @DisplayName("POST /api/crud/students should create new student")
    void testCreateStudent() throws Exception {
        given(studentService.createStudent(any(Student.class))).willReturn(sampleStudent);

        String jsonPayload = """
                {
                    "name": "Alice Morgan",
                    "email": "alice@cognizant.com",
                    "course": "Java FSE"
                }
                """;

        mockMvc.perform(post("/api/crud/students")
                .with(csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonPayload))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Alice Morgan"));
    }
}
