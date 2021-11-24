package com.ubcscheduler.ubcscheduler.model;

import javax.persistence.*;

@Entity
@Table(name = "courses")
public class Course {
    private long id;
    private String courseId;
    private String courseCode;
    private String courseNumber;
    private String sections; //modified String
    private String prerequisites; //Modified string
    private String corequisites; //Modified string
    private String requiredSections; //Modified string4
    private short credits;
    private short year;

    public Course(String element) {
        this.courseId = element;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "courseId", nullable = false)
    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public Course() {
    }

    public Course(String courseId, String courseCode, String courseNumber, Section[] sections, String[] prerequisites, String[] corequisites, String[] requiredSections, boolean term, int credits) {
        this.courseId = courseId;
    }

    @Column(name = "courseCode", nullable = false)
    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }
    @Column(name = "courseNumber", nullable = false)
    public String getCourseNumber() {
        return courseNumber;
    }

    public void setCourseNumber(String courseNumber) {
        this.courseNumber = courseNumber;
    }

    @Column(name = "sections", nullable = false)
    public String getSections() {
        return sections;
    }

    public void setSections(String sections) {
        this.sections = sections;
    }

    @Column(name = "prerequisites", nullable = false)
    public String getPrerequisites() {
        return prerequisites;
    }

    public void setPrerequisites(String prerequisites) {
        this.prerequisites = prerequisites;
    }

    @Column(name = "corequisites", nullable = false)
    public String getCorequisites() {
        return corequisites;
    }

    public void setCorequisites(String corequisites) {
        this.corequisites = corequisites;
    }

    @Column(name = "requiredSections", nullable = false)
    public String getRequiredSections() {
        return requiredSections;
    }

    public void setRequiredSections(String requiredSections) {
        this.requiredSections = requiredSections;
    }

    @Column(name = "credits", nullable = false)
    public short getCredits() {
        return credits;
    }

    public void setCredits(short credits) {
        this.credits = credits;
    }

    @Column(name = "year", nullable = false)
    public short getYear() {
        return year;
    }

    public void setYear(short year) {
        this.year = year;
    }
}
