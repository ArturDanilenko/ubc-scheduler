package com.ubcscheduler.ubcscheduler.model;

import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.json.JSONObject;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "courses")
@TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "courseId", nullable = false, unique = true)
    private String courseId;

    @Column(name = "courseCode", nullable = false)
    private String courseCode;

    @Column(name = "courseNumber", nullable = false)
    private String courseNumber;

    @Column(name = "courseName", nullable = false)
    private String courseName;

    @Column(name = "courseDescription", nullable = false)
    private String courseDescription;

    @Type(type = "jsonb")
    @Column(name = "sections", columnDefinition = "jsonb")
    private ArrayList<Section> sections;

    @Column(name = "prerequisites", nullable = false)
    private String prerequisites;

    @Column(name = "corequisites", nullable = false)
    private String corequisites;

    @Column(name = "requiredSections", nullable = false)
    private String requiredSections; //Modified string

    @Column(name = "credits", nullable = false)
    private short credits;

    @Column(name = "year", nullable = false)
    private short year;
}
