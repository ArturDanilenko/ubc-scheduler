import { createSelector } from "reselect";
import { ApplicationState } from "../Definitions/Types/StateTypes/CommonStateTypes";

export function selectCourseNumbers (state: ApplicationState) {
    if(state.courseState?.courseNumbers === undefined) return [];
    console.log(state.courseState?.courseNumbers);
    return state.courseState?.courseNumbers;
}

export function selectSelectedCourseCode (state: ApplicationState) {
    if(state.courseState?.courseCodeSelected === undefined) return "";
    return state.courseState?.courseCodeSelected;
}

export const selectCourseNumbersByCourseCode = createSelector(
    selectCourseNumbers,
    selectSelectedCourseCode,
    (courseNumbers, courseCode) => {
        const courseNums = courseNumbers.filter(courseNumber => courseNumber.courseCode === courseCode);
        return courseNums ? (courseNums[0] ? courseNums[0].numbers: []) : [];
    }
);