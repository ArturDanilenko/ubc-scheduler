package com.ubcscheduler.ubcscheduler.model;

public class Section {
    private String sectionCode;
    private String prof;
    private Schedule[] schedule;

    public Section(String sectionCode, String prof, Schedule[] schedule) {
        this.sectionCode = sectionCode;
        this.prof = prof;
        this.schedule = schedule;
    }

    public String getSectionCode() {
        return sectionCode;
    }

    public void setSectionCode(String sectionCode) {
        this.sectionCode = sectionCode;
    }

    public String getProf() {
        return prof;
    }

    public void setProf(String prof) {
        this.prof = prof;
    }

    public Schedule[] getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule[] schedule) {
        this.schedule = schedule;
    }

    public Section() {
    }
}
