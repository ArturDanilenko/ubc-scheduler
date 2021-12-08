import { DispatchTypeQueryBuilder } from '../../Definitions/Types/ActionTypes/CommonActionTypes';
import { ADD_QUERY_PARAMETERS, queryActionTypes } from "../../Definitions/actionTypes";
import { IQueryBuilderEntry, ISelectedData } from '../../Definitions/Interfaces/QueryBuilderInterfaces';
import axios from 'axios';
import { ICourseNumbers } from '../../Definitions/Interfaces/CourseInterfaces';

export const setQueryParameters = (entry: IQueryBuilderEntry) => (dispatch:DispatchTypeQueryBuilder) =>{
    dispatch({
        type: ADD_QUERY_PARAMETERS,
        queryEntry: entry
    });
};

export function getCourseNumbers (code: string, dispatch:DispatchTypeQueryBuilder) {
    axios
        .get('https://e3f8c00b-640c-4fbc-96ba-f4088d1a532a.mock.pstmn.io/api/v1/courseNumbers/'+code)
        .then(res => {
            const courseNumbersReceived: ICourseNumbers = {
                courseCode: code,
                numbers: res.data
            };
            dispatch({
                type: queryActionTypes.GET_COURSE_NUMBERS,
                courseNumbers: courseNumbersReceived
            })
        });
}

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
        case queryActionTypes.SET_SELECTED_COURSE_CODE:
            dispatch({
                type: paramType,
                courseCode: data.written
            });
            if(data.written !== undefined) { 
                getCourseNumbers(data.written, dispatch);
            }
            break;
        default:
            break;
    } 
};
