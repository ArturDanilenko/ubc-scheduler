import { CourseAction } from "../../Definitions/Types/ActionTypes/CommonActionTypes";
import { CourseState } from "../../Definitions/Types/StateTypes/CommonStateTypes";
import {GET_COURSES, COURSES_LOADING, GET_COURSE_NUMBERS } from "../../Definitions/actionTypes";
import { ICourseNumbers } from "../../Definitions/Interfaces/CommonInterfaces";

export const initialCourseState: CourseState = {
    courses: [],
    courseNumbers: [],
    courseCodeSelected: "none",
    loading: false  
}

const courseReducer = ( state: CourseState = initialCourseState, action: CourseAction ): CourseState => {
    switch (action.type) {
        case GET_COURSES:
            return{
            ...state,
            courses: action.courses,
            loading: false
            };
        case COURSES_LOADING:
            return{
                ...state,
                loading: true
            };
        case GET_COURSE_NUMBERS:
            let courseNumbersOld:ICourseNumbers[] | undefined = state.courseNumbers;
            let currentCourseCode: string = state.courseCodeSelected;
            if(action.courseNumbers) {
                if(courseNumbersOld === undefined) courseNumbersOld = [action.courseNumbers];
                else if(!courseNumbersOld.some(courseNumber=> courseNumber.courseCode === action.courseNumbers?.courseCode)) courseNumbersOld.push(action.courseNumbers)
                currentCourseCode = action.courseNumbers.courseCode;
            }
            return{
                ...state,
                loading: false,
                courseNumbers: courseNumbersOld,
                courseCodeSelected: currentCourseCode
            }
        default: 
            return state;
    }
}

  //export const courseSelector = (state: CourseState, code: string) => state.courses.filter(course => course.courseCode === code);
  
  export default courseReducer;