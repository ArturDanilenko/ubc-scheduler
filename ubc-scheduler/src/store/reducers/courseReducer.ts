import {GET_COURSES, COURSES_LOADING } from "../actionTypes";
import {
  CourseState,
  CourseAction
} from "../../types/commonTypes";

export const initialCourseState: CourseState = {
  courses: [],
  loading: false  
}

const courseReducer = ( state: CourseState = initialCourseState, action: CourseAction): CourseState => {
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
            }
        default: 
            return state;
    }
}

  //export const courseSelector = (state: CourseState, code: string) => state.courses.filter(course => course.courseCode === code);
  
  export default courseReducer;