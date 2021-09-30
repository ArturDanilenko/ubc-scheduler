package com.ubcscheduler.ubcscheduler.controller;

import com.ubcscheduler.ubcscheduler.model.Course;
import com.ubcscheduler.ubcscheduler.repository.CourseRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses")
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @PostMapping("/courses")
    public Course createCourseContainer(@Valid @RequestBody String rawJSON) {
        Course course = new Course();
        try {
            JSONObject json = new JSONObject(rawJSON);
            course.setCourseId((json.getString("courseId")));
            course.setCourseCode(json.getString("courseCode"));
            course.setCourseNumber(json.getString("courseNumber"));
            course.setSections(json.getString("sections"));
            course.setPrerequisites(json.getString("prerequisites"));
            course.setCorequisites(json.getString("corequisites"));
            course.setRequiredSections(json.getString("requiredSections"));
            course.setCredits(Short.parseShort(json.getString("credits")));
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return courseRepository.save(course);
    }
}
