import axios from 'axios';
import { DispatchTypeCourses } from '../../Definitions/Types/ActionTypes/CommonActionTypes';
import {GET_COURSES, COURSES_LOADING, COURSE_NUMBERS_LOADING } from "../../Definitions/actionTypes";
import { IQueryBuilderEntry } from '../../Definitions/Interfaces/CommonInterfaces';
import { queryProcessor } from './queryProcessor';

export const processQuery = (queryEntryList: IQueryBuilderEntry[]) => ( dispatch: DispatchTypeCourses ) => {
    console.log(queryProcessor(queryEntryList));
};


export const getCourses = () => (dispatch:DispatchTypeCourses) =>{
    dispatch(setCoursesLoading());
    axios
        .get('https://1c41c64c-fcb2-4f7e-9ae8-faf689fe8f88.mock.pstmn.io/api/v1/courses')
        .then(res => dispatch({
            type: GET_COURSES,
            courses: res.data
        }));
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
