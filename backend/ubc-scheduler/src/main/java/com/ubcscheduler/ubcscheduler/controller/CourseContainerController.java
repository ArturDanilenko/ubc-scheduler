package com.ubcscheduler.ubcscheduler.controller;

import com.ubcscheduler.ubcscheduler.model.Course;
import com.ubcscheduler.ubcscheduler.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CourseContainerController {
    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @PostMapping("/courses")
    public Course createCourseContainer(@Valid @RequestBody Course course) {
        return courseRepository.save(course);
    }
}
