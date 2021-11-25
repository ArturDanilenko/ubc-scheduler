import axios from 'axios';
import { 
    DispatchTypeCourses
} from "../../types/commonTypes"
import {GET_COURSES, COURSES_LOADING } from "../actionTypes";


export const getCourses = () => (dispatch:DispatchTypeCourses) =>{
    dispatch(setCoursesLoading());
    axios
        .get('https://1c41c64c-fcb2-4f7e-9ae8-faf689fe8f88.mock.pstmn.io/api/v1/courses')
        .then(res => dispatch({
            type: GET_COURSES,
            courses: res.data
        }));
}

export const setCoursesLoading = () =>{
    return {
        type: COURSES_LOADING
    }
};
