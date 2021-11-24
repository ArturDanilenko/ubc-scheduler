package com.ubcscheduler.ubcscheduler.controller;

import com.ubcscheduler.ubcscheduler.model.Course;
import com.ubcscheduler.ubcscheduler.repository.CourseRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static java.lang.Short.parseShort;

@RestController
@RequestMapping("/api/v1")
public class CourseController {
    @Autowired
    private CourseRepository courseRepository;

    @GetMapping("/courses")
    public ResponseEntity getAllCourses() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(courseRepository.findAll());
    }

    @GetMapping("/course")
    public ResponseEntity getOneCourse(@Valid @RequestBody String rawJSON) {
        try{
            JSONObject json = new JSONObject(rawJSON);
            if(!courseRepository.existsByCourseId(json.getString("courseId"))) {
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body("The course does not exist in the database...");
            }
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(courseRepository.findByCourseId(json.getString("courseId")));

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("Json body couldn't be parsed...");
    }

    @GetMapping("/coursesByCode")
    public ResponseEntity getCourseByCode(@Valid @RequestBody String rawJSON) {
        try{
            JSONObject json = new JSONObject(rawJSON);
            if(!courseRepository.existsByCourseCode(json.getString("courseCode"))) {
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body("No courses matching the course code exist in the database...");
            }
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(courseRepository.findAllByCourseCode(json.getString("courseCode")));

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("Json body couldn't be parsed...");
    }

    @GetMapping("/coursesByCodeAndYear")
    public ResponseEntity getCourseByCodeAndYear(@Valid @RequestBody String rawJSON) {
        try{
            JSONObject json = new JSONObject(rawJSON);
            String courseCode = json.getString("courseCode");
            short year = parseShort(json.getString("year"));
            if(!courseRepository.existsByCourseCodeAndYear(courseCode, year)) {
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body("No courses matching the course code and year exist in the database...");
            }
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(courseRepository.findAllByCourseCodeAndYear(courseCode, year));

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("Json body couldn't be parsed...");
    }

    @PostMapping("/courses")
    public ResponseEntity createCourse(@Valid @RequestBody String rawJSON) {
        Course course = new Course();
        try {
            JSONObject json = new JSONObject(rawJSON);
            if(courseRepository.existsByCourseId(json.getString("courseId"))) {
                return ResponseEntity
                        .status(HttpStatus.CONFLICT)
                        .body("The item already exists in the database...");
            }
            course.setCourseId((json.getString("courseId")));
            course.setCourseCode(json.getString("courseCode"));
            course.setCourseNumber(json.getString("courseNumber"));
            course.setSections(json.getString("sections"));
            course.setPrerequisites(json.getString("prerequisites"));
            course.setCorequisites(json.getString("corequisites"));
            course.setRequiredSections(json.getString("requiredSections"));
            course.setCredits(parseShort(json.getString("credits")));
            course.setYear(parseShort(json.getString("year")));
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(courseRepository.save(course));
    }
}
