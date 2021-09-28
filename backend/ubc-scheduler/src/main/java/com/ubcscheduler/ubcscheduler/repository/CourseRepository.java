package com.ubcscheduler.ubcscheduler.repository;

import com.ubcscheduler.ubcscheduler.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
