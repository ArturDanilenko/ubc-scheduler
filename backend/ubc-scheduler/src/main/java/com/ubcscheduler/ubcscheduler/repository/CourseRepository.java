package com.ubcscheduler.ubcscheduler.repository;

import com.ubcscheduler.ubcscheduler.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    boolean existsByCourseId(String courseId);
    boolean existsByCourseCode(String courseCode);
    boolean existsByCourseCodeAndYear(String courseCode, short year);
    Course findByCourseId(String courseId);
    List<Course> findAllByCourseCode(String courseCode);
    List<Course> findAllByCourseCodeAndYear(String courseCode, short year);

}
