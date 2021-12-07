import { DispatchTypeQueryBuilder } from '../../Definitions/Types/ActionTypes/CommonActionTypes';
import { ADD_QUERY_PARAMETERS, GET_COURSE_NUMBERS, queryActionTypes } from "../../Definitions/actionTypes";
import { ICourseNumbers, IQueryBuilderEntry, ISelectedData } from '../../Definitions/Interfaces/CommonInterfaces';
import axios from 'axios';

export const setSelectedParameters = (data: ISelectedData, paramType: queryActionTypes) => (dispatch:DispatchTypeQueryBuilder) =>{
    switch(paramType) {
        case queryActionTypes.SET_SELECTED_COURSE_NUMBER:
            dispatch({
                type: paramType,
                courseNumber: data.numeric
            });
            break;
        case queryActionTypes.SET_SELECTED_TERM:
            dispatch({
                type: paramType,
                term: data.numeric
            });
            break;
        case queryActionTypes.SET_SELECTED_YEAR:
            dispatch({
                type: paramType,
                year: data.numeric
            });
            break
        default:
            break;
    }
    
};

export const setQueryParameters = (entry: IQueryBuilderEntry) => (dispatch:DispatchTypeQueryBuilder) =>{
    dispatch({
        type: ADD_QUERY_PARAMETERS,
        queryEntry: entry
    });
};

export const getCourseNumbers = (code: string) => (dispatch:DispatchTypeQueryBuilder) =>{
    //dispatch(setCoursesLoading());
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
