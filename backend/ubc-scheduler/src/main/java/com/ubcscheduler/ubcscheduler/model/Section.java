package com.ubcscheduler.ubcscheduler.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Section implements Serializable {
    private String sectionCode;
    private String prof;
    private ArrayList<Schedule> schedule;
}
