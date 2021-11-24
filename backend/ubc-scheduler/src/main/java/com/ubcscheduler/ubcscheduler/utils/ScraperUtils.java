package com.ubcscheduler.ubcscheduler.utils;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;

public class ScraperUtils {

    // Returns array list with course codes (XXXX)
    public static ArrayList<String> getAllCourseCodes (){
        ArrayList<String> courseCodes = new ArrayList<String>();
        String ubcUrl = "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-all-departments";
        try {
            boolean moreItems = true;
            int counter = 1, length = 0;
            String courseCode1, courseCode2;

            Document doc = Jsoup.connect(ubcUrl).get();
            Elements sections1 = doc.getElementsByClass("section1");
            Elements sections2 = doc.getElementsByClass("section2");

            for (Element section : sections1) {
                length++;
            }
            //Why so verbose?
            //Iterating this way allows for the array to be structured alphabetically
            //without the use of addition sorting

            while( moreItems) {
                if(counter == length-1) break;
                Element section1 = sections1.get(counter);
                Element section2 = sections2.get(counter);
                courseCode1 = section1.select("a").text();
                if(!courseCode1.isEmpty() && !courseCode1.isBlank()) {
                    courseCodes.add(courseCode1);
                }
                courseCode2 = section2.select("a").text();
                if(!courseCode2.isEmpty() && !courseCode2.isBlank()) {
                    courseCodes.add(courseCode2);
                }
                else if (!courseCode2.isEmpty() && !courseCode2.isBlank() && !courseCode1.isEmpty() && !courseCode1.isBlank()){
                    break;
                }
                counter++;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return courseCodes;
    }
    // Returns array list with course ids (XXXX###)
    public static ArrayList<String> getAllCourseIdsFromCourseCode(String code) {
        ArrayList<String> courseIds = new ArrayList<String>();

        String mainPart = "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-department&dept=";
        try {
            boolean moreItems = true;
            int counter = 1, length = 0;
            String courseId1, courseId2;

            Document doc = Jsoup.connect(mainPart+code).get();

            Elements sections1 = doc.getElementsByClass("section1");
            Elements sections2 = doc.getElementsByClass("section2");

            for (Element section : sections1) {
                length++;
            }

            if (length <= 1) {
                courseIds.add("No courses are offered for this code: "+code);
                return courseIds;
            }
            //Why so verbose?
            //Iterating this way allows for the array to be structured alphabetically
            //without the use of addition sorting

            while( moreItems) {
                if(counter == length-1) break;
                Element section1 = sections1.get(counter);
                Element section2 = sections2.get(counter);
                courseId1 = section1.select("a").text();
                if(!courseId1.isEmpty() && !courseId1.isBlank()) {
                    courseIds.add(courseId1.replaceAll("\\s+",""));
                }
                courseId2 = section2.select("a").text();
                if(!courseId2.isEmpty() && !courseId2.isBlank()) {
                    courseIds.add(courseId2.replaceAll("\\s+",""));
                }
                else if (!courseId2.isEmpty() && !courseId2.isBlank() && !courseId1.isEmpty() && !courseId1.isBlank()){
                    break;
                }
                counter++;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return courseIds;
    }
    public static ArrayList<String> getAllSectionsFromCourseID(String courseID, String courseCode){
        //Check that course id and code are in sync
        if(!courseID.contains(courseCode)) {
            try {
                throw new Exception("CourseID and courseCode are not in sync");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        ArrayList<String> sections = new ArrayList<String>();

        String courseNumber = courseID.replace(courseCode, "");
        String url = "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept="+courseCode+"&course="+courseNumber;
        try {
            boolean moreItems = true;
            int counter = 0, length = 0, length2 = 0;
            String courseId1, courseId2;

            Document doc = Jsoup.connect(url).get();

            Elements sections1 = doc.getElementsByClass("section1");
            Elements sections2 = doc.getElementsByClass("section2");

            for (Element section : sections1) {
                length++;
            }

            for (Element section : sections2) {
                length2++;
            }
            //Why so verbose?
            //Iterating this way allows for the array to be structured alphabetically
            //without the use of addition sorting

            while( moreItems) {

                // For some of the ubc pages, the sections are uneven, therefore we have to track each one individually
                if(counter < length) {
                    Element section1 = sections1.get(counter);
                    courseId1 = section1.select("a").text();

                    if (!courseId1.isEmpty() && !courseId1.isBlank()) {
                        courseId1 = courseId1.replaceAll("\\s+", "").replace("SectionComments", "").replace(courseCode+courseNumber, "");
                        sections.add(courseId1);
                    }
                }
                if(counter < length2) {
                    Element section2 = sections2.get(counter);
                    courseId2 = section2.select("a").text();
                    if (!courseId2.isEmpty() && !courseId2.isBlank()) {
                        courseId2 = courseId2.replaceAll("\\s+", "").replace("SectionComments", "").replace(courseCode+courseNumber, "");
                        sections.add(courseId2);
                    }
                    counter++;
                }
                if(counter >= length && counter >= length2){
                    break;
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return sections;
    }
}
