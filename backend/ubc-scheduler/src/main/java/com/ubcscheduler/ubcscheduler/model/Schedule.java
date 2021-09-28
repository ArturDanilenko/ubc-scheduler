package com.ubcscheduler.ubcscheduler.model;

import java.sql.Time;

public class Schedule {
    private String day;
    private Time startTime;
    private Time endTime;
    private String building;
    private String room;

    public Schedule() {
    }

    public Schedule(String day, Time startTime, Time endTime, String building, String room) {
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.building = building;
        this.room = room;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }
}
