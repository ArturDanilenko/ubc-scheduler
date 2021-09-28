package com.ubcscheduler.ubcscheduler.model;

import javax.persistence.*;

@Entity
@Table(name = "courses")
public class Course {
    private long id;
    private String courseId;
//   private String courseCode;
//    private int courseNumber;
//    private Section[] sections;
//    private String[] prerequisites;
//    private String[] corequisites;
//    private String[] requiredSections;
//    private boolean term;
//    private int credits;


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

//    public String getCourseCode() {
//        return courseCode;
//    }
//
//    public void setCourseCode(String courseCode) {
//        this.courseCode = courseCode;
//    }

//    public int getCourseNumber() {
//        return courseNumber;
//    }
//
//    public void setCourseNumber(int courseNumber) {
//        this.courseNumber = courseNumber;
//    }
//
//    public Section[] getSections() {
//        return sections;
//    }
//
//    public void setSections(Section[] sections) {
//        this.sections = sections;
//    }
//
//    public String[] getPrerequisites() {
//        return prerequisites;
//    }
//
//    public void setPrerequisites(String[] prerequisites) {
//        this.prerequisites = prerequisites;
//    }
//
//    public String[] getCorequisites() {
//        return corequisites;
//    }
//
//    public void setCorequisites(String[] corequisites) {
//        this.corequisites = corequisites;
//    }
//
//    public String[] getRequiredSections() {
//        return requiredSections;
//    }
//
//    public void setRequiredSections(String[] requiredSections) {
//        this.requiredSections = requiredSections;
//    }
//
//    public boolean isTerm() {
//        return term;
//    }
//
//    public void setTerm(boolean term) {
//        this.term = term;
//    }
//
//    public int getCredits() {
//        return credits;
//    }
//
//    public void setCredits(int credits) {
//        this.credits = credits;
//    }

    public Course() {
    }

    public Course(String courseId, String courseCode, int courseNumber, Section[] sections, String[] prerequisites, String[] corequisites, String[] requiredSections, boolean term, int credits) {
        this.courseId = courseId;
       // this.courseCode = courseCode;
//        this.courseNumber = courseNumber;
//        this.sections = sections;
//        this.prerequisites = prerequisites;
//        this.corequisites = corequisites;
//        this.requiredSections = requiredSections;
//        this.term = term;
//        this.credits = credits;
    }
}
