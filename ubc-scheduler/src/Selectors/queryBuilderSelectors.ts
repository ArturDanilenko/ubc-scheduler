import { createSelector } from "reselect";
import { IQueryBuilderEntry, QUERY_BUILDER_DATAVALUES } from "../Definitions/Interfaces/QueryBuilderInterfaces";
import { ApplicationState } from "../Definitions/Types/StateTypes/CommonStateTypes";
import { firstDigit } from "../Utils/commonHelpers";

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
    selectYear,
    (courseNumbers, courseCode, year) => {
        const filteredCourseNumbers = courseNumbers.filter(courseNumber => courseNumber.courseCode === courseCode);
        let numbersForChosenCode = filteredCourseNumbers ? (filteredCourseNumbers[0] ? filteredCourseNumbers[0].numbers: []) : [];
        if (year === QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED) return numbersForChosenCode;
        return numbersForChosenCode.filter(number => firstDigit(number) === year);
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

