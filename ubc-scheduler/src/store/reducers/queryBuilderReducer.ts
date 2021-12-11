import { QueryBuilderAction } from "../../Definitions/Types/ActionTypes/CommonActionTypes";
import { QueryBuilderState } from "../../Definitions/Types/StateTypes/CommonStateTypes";
import {
    queryActionTypes
} from "../../Definitions/actionTypes";
import { IQueryBuilderEntry, QUERY_BUILDER_DATAVALUES } from "../../Definitions/Interfaces/QueryBuilderInterfaces";
import { ICourseNumbers } from "../../Definitions/Interfaces/CourseInterfaces";

export const initialQueryState: QueryBuilderState = {
    queryEntryList: [],
    courseNumbers: [],
    courseCodeSelected: "",
    courseNumberSelected: QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED,
    yearSelected: QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED,
    termSelected: QUERY_BUILDER_DATAVALUES.BOTH_TERMS_SELECTED,
    loading: false
};

const queryBuilderReducer = ( state: QueryBuilderState = initialQueryState, action: QueryBuilderAction ): QueryBuilderState => {
    switch (action.type) {
        case queryActionTypes.ADD_QUERY_PARAMETERS:
            const queryEntry: IQueryBuilderEntry = action.queryEntry ? action.queryEntry : {courseCode: 'undefined'};
            if (queryEntry.courseCode === 'undefined') return {...state};
            return {
                ...state,
                queryEntryList: [
                    ...state.queryEntryList,
                    queryEntry
                ]
            };
        case queryActionTypes.ADD_QUERY_PARAMETERS_AND_REMOVE_SUBSETS:
            const queryEntryWithSuperset: IQueryBuilderEntry = action.queryEntry ? action.queryEntry : {courseCode: 'undefined'};
            const filteredQueryEntryList = state.queryEntryList.filter(queryEntry => {
                let firstDigitOfCourseNumber = queryEntry.courseNumber ? Math.floor( queryEntry.courseNumber / 100 ) % 10 : QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED;
                return !(
                    queryEntry.courseCode === queryEntryWithSuperset.courseCode &&
                    firstDigitOfCourseNumber === queryEntryWithSuperset.year
                );
            });
            console.log(filteredQueryEntryList);
            if (queryEntryWithSuperset.courseCode === 'undefined') return {...state};
            return {
                ...state,
                queryEntryList: [
                    ...filteredQueryEntryList,
                    queryEntryWithSuperset
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
            let courseCodeSelected = action.courseCode ? action.courseCode : "none";
            // Check if course number selected exists on the new course code, if not change it
            if( state.yearSelected !== QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED) {
                let courseNumbersForNewCourseCode = state.courseNumbers ? state.courseNumbers.filter(courseNumber => courseNumber.courseCode === courseCodeSelected) : [];
                let courseNumberForNewCourseCode = courseNumbersForNewCourseCode[0];
                if( courseNumberForNewCourseCode !== undefined ) {
                    let courseNumberAlreadyExists: boolean = courseNumberForNewCourseCode.numbers.some(courseNumber => courseNumber === state.yearSelected);
                    if(!courseNumberAlreadyExists) return {
                        ...state,
                        courseCodeSelected,
                        courseNumberSelected: QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED
                    };
                }
            }
            return {
                ...state,
                courseCodeSelected
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