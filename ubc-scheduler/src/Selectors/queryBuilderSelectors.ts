import { createSelector } from "reselect";
import { IQueryBuilderEntry } from "../Definitions/Interfaces/QueryBuilderInterfaces";
import { ApplicationState } from "../Definitions/Types/StateTypes/CommonStateTypes";

export function selectCourseNumbers (state: ApplicationState) {
    if(state.queryBuilderState?.courseNumbers === undefined) return [];
    return state.queryBuilderState?.courseNumbers;
};

export function selectCourseCode (state: ApplicationState) {
    return state.queryBuilderState.courseCodeSelected;
};

export function selectYear (state: ApplicationState) {
    return state.queryBuilderState.yearSelected;
};

export function selectTerm (state: ApplicationState) {
    return state.queryBuilderState.termSelected;
};

export function selectCourseNumber (state: ApplicationState) {
    return state.queryBuilderState.courseNumberSelected;
};

export function selectQueriedCourses (state: ApplicationState) {
    return state.queryBuilderState.queryEntryList;
}

export const selectCourseNumbersByCourseCode = createSelector(
    selectCourseNumbers,
    selectCourseCode,
    (courseNumbers, courseCode) => {
        const courseNums = courseNumbers.filter(courseNumber => courseNumber.courseCode === courseCode);
        return courseNums ? (courseNums[0] ? courseNums[0].numbers: []) : [];
    }
);

export const selectFormFields = createSelector(
    selectCourseCode,
    selectCourseNumber,
    selectYear,
    selectTerm,
    (courseCode, courseNumber, year, term) => {
        const entry: IQueryBuilderEntry = {
            courseCode,
            courseNumber,
            year,
            term
        };
        return entry;
    }
);

