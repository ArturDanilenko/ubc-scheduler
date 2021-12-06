import axios from 'axios';
import { DispatchTypeCourses } from '../../Definitions/Types/ActionTypes/CommonActionTypes';
import {GET_COURSES, COURSES_LOADING, COURSE_NUMBERS_LOADING, GET_COURSE_NUMBERS } from "../../Definitions/actionTypes";
import { ICourseNumbers } from '../../Definitions/Interfaces/CommonInterfaces';


export const getCourses = () => (dispatch:DispatchTypeCourses) =>{
    dispatch(setCoursesLoading());
    axios
        .get('https://1c41c64c-fcb2-4f7e-9ae8-faf689fe8f88.mock.pstmn.io/api/v1/courses')
        .then(res => dispatch({
            type: GET_COURSES,
            courses: res.data
        }));
}

export const getCourseNumbers = (code: string) => (dispatch:DispatchTypeCourses) =>{
    dispatch(setCoursesLoading());
    axios
        .get('https://e3f8c00b-640c-4fbc-96ba-f4088d1a532a.mock.pstmn.io/api/v1/courseNumbers/'+code)
        .then(res => {
            const courseNumbersReceived: ICourseNumbers = {
                courseCode: code,
                numbers: res.data
            };
            dispatch({
                type: GET_COURSE_NUMBERS,
                courseNumbers: courseNumbersReceived
            })
        });
}

export const setCourseNumbersLoading = () =>{
    return {
        type: COURSE_NUMBERS_LOADING
    }
};

export const setCoursesLoading = () =>{
    return {
        type: COURSES_LOADING
    }
};
