import { QueryBuilderAction } from "../../Definitions/Types/ActionTypes/CommonActionTypes";
import { QueryBuilderState } from "../../Definitions/Types/StateTypes/CommonStateTypes";
import {
    ADD_QUERY_PARAMETERS, queryActionTypes
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
        case queryActionTypes.GET_COURSE_NUMBERS:
            let courseNumbers: ICourseNumbers[] = state.courseNumbers ? [...state.courseNumbers] : [];
            if(action.courseNumbers) {
                if(courseNumbers === undefined) courseNumbers = [action.courseNumbers];
                else if(!courseNumbers.some(courseNumber => courseNumber.courseCode === action.courseNumbers?.courseCode)) {
                    courseNumbers.push(action.courseNumbers)
                }
            };
            return{
                ...state,
                loading: false,
                courseNumbers: [
                    ...courseNumbers
                ]
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
        case queryActionTypes.SEND_QUERY:
            return {
                ...state
            }
        default: 
            return state;
    }
};
  
export default queryBuilderReducer;