import { QueryBuilderAction } from "../../Definitions/Types/ActionTypes/CommonActionTypes";
import { QueryBuilderState } from "../../Definitions/Types/StateTypes/CommonStateTypes";
import {
    queryActionTypes
} from "../../Definitions/actionTypes";
import {  QUERY_BUILDER_DATAVALUES } from "../../Definitions/Interfaces/QueryBuilderInterfaces";
import { 
    addQueryBuilderEntry,
    addQueryBuilderEntryAndRemoveSubset,
    getCourseNumbersForDisplay,
    setNewSelectedCourseCode,
    setNewSelectedCourseNumber,
    setNewSelectedTerm,
    setNewSelectedYear
} from "../../Utils/QueryBuilderReducerUtils";

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
    let newState: QueryBuilderState;
    switch (action.type) {
        case queryActionTypes.ADD_QUERY_PARAMETERS:
            newState = addQueryBuilderEntry(state, action.queryEntry);
            return { ...newState };
        case queryActionTypes.ADD_QUERY_PARAMETERS_AND_REMOVE_SUBSETS:
            newState = addQueryBuilderEntryAndRemoveSubset(state, action.queryEntry);
            return { ...newState };
        case queryActionTypes.GET_COURSE_NUMBERS:
            newState = getCourseNumbersForDisplay(state, action.courseNumbers);
            return { ...newState };
        case queryActionTypes.SET_SELECTED_COURSE_NUMBER:
            newState = setNewSelectedCourseNumber(state, action.courseNumber);
            return { ...newState };
        case queryActionTypes.SET_SELECTED_TERM:
            newState = setNewSelectedTerm(state, action.term);
            return { ...newState };
        case queryActionTypes.SET_SELECTED_YEAR:
            newState = setNewSelectedYear(state, action.year);
            return { ...newState };
        case queryActionTypes.SET_SELECTED_COURSE_CODE:
            newState = setNewSelectedCourseCode(state, action.courseCode);
            return { ...newState };
        case queryActionTypes.SEND_QUERY:
            return { ...state };
        default: 
            return state;
    }
};
  
export default queryBuilderReducer;