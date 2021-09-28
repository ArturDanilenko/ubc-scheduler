package com.ubcscheduler.ubcscheduler.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name = "CourseContainer")
public class CourseContainer {
    private long id;
    private ArrayList<Course> courses;

    public CourseContainer(ArrayList<Course> classes) {
        this.courses = classes;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public CourseContainer(ArrayList<Course> courses, long id) {
        this.courses = courses;
        this.id = id;
    }
    public CourseContainer() {
    }
    @Column(name = "courses", nullable = false)
    public ArrayList<Course> getCourses() {
        return courses;
    }

    public void setCourses(ArrayList<Course> courses) {
        this.courses = courses;
    }
}
