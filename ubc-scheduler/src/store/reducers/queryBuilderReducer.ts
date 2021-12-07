import { QueryBuilderAction } from "../../Definitions/Types/ActionTypes/CommonActionTypes";
import { QueryBuilderState } from "../../Definitions/Types/StateTypes/CommonStateTypes";
import {
    ADD_QUERY_PARAMETERS, GET_COURSE_NUMBERS, queryActionTypes
} from "../../Definitions/actionTypes";
import { ICourseNumbers, IQueryBuilderEntry } from "../../Definitions/Interfaces/CommonInterfaces";

export const initialQueryState: QueryBuilderState = {
    queryEntryList: [],
    courseNumbers: [],
    courseCodeSelected: "",
    courseNumberSelected: 0,
    yearSelected: -1,
    termSelected: 3,
    loading: false
};

const queryBuilderReducer = ( state: QueryBuilderState = initialQueryState, action: QueryBuilderAction ): QueryBuilderState => {
    switch (action.type) {
        case ADD_QUERY_PARAMETERS:
            const queryEntry: IQueryBuilderEntry = action.queryEntry ? action.queryEntry : {courseCode: "undefined"};
            if (queryEntry.courseCode === undefined) return {...state};
            return {
                ...state,
                queryEntryList: [
                    ...state.queryEntryList,
                    queryEntry
                ]
            };
        case GET_COURSE_NUMBERS:
            let courseNumbersOld:ICourseNumbers[] | undefined = state.courseNumbers;
            let currentCourseCode: string = state.courseCodeSelected;
            if(action.courseNumbers) {
                if(courseNumbersOld === undefined) courseNumbersOld = [action.courseNumbers];
                else if(!courseNumbersOld.some(courseNumber=> courseNumber.courseCode === action.courseNumbers?.courseCode)) courseNumbersOld.push(action.courseNumbers)
                currentCourseCode = action.courseNumbers.courseCode;
            };
            return{
                ...state,
                loading: false,
                courseNumbers: courseNumbersOld,
                courseCodeSelected: currentCourseCode
            };
        case queryActionTypes.SET_SELECTED_COURSE_NUMBER:
            return {
                ...state,
                courseNumberSelected: action.courseNumber ? action.courseNumber : -1
            };
        case queryActionTypes.SET_SELECTED_TERM:
            return {
                ...state,
                termSelected: action.term ? action.term : 3
            };
        case queryActionTypes.SET_SELECTED_YEAR:
            return {
                ...state,
                yearSelected: action.year ? action.year : -1
            };
        case queryActionTypes.SET_SELECTED_COURSE_CODE:
            return {
                ...state,
                courseCodeSelected: action.courseCode ? action.courseCode : "none"
            };   
        default: 
            return state;
    }
};
  
export default queryBuilderReducer;