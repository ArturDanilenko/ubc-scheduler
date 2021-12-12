import { DispatchTypeQueryBuilder } from '../../Definitions/Types/ActionTypes/CommonActionTypes';
import { queryActionTypes } from "../../Definitions/actionTypes";
import { IQueryBuilderEntry, ISelectedData } from '../../Definitions/Interfaces/QueryBuilderInterfaces';
import { VALIDATOR_RESPONSES } from '../../Definitions/Interfaces/UtilsInterfaces';

export const addQueryBuilderEntry = (entry: IQueryBuilderEntry, status: VALIDATOR_RESPONSES) => (dispatch:DispatchTypeQueryBuilder) =>{
    let type: queryActionTypes;
    switch (status) {
        case VALIDATOR_RESPONSES.SUPER_SET:
            type = queryActionTypes.ADD_QUERY_PARAMETERS_AND_REMOVE_SUBSETS;
            break;
        default:
            type = queryActionTypes.ADD_QUERY_PARAMETERS
    }
    dispatch({
        type,
        queryEntry: entry
    });
};

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
            if(data.written !== undefined) { 
                dispatch({
                    type: queryActionTypes.SET_SELECTED_COURSE_CODE_SAGA,
                    courseCode: data.written
                });
            }
            break;
        default:
            break;
    } 
};
