package com.ubcscheduler.ubcscheduler.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Schedule implements Serializable {
    private String day;
    private double startTime;
    private double endTime;
    private String building;
    private String room;
}
