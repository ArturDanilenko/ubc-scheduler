import { ICourseNumbers } from "../Definitions/Interfaces/CourseInterfaces";
import { IQueryBuilderEntry, QUERY_BUILDER_DATAVALUES } from "../Definitions/Interfaces/QueryBuilderInterfaces";
import { QueryBuilderState } from "../Definitions/Types/StateTypes/CommonStateTypes";
import { firstDigit } from "./commonHelpers";

export const addQueryBuilderEntry = (state: QueryBuilderState, entry: IQueryBuilderEntry | undefined) => {
    const queryEntry: IQueryBuilderEntry = entry ? entry : {courseCode: 'undefined'};
    if (queryEntry.courseCode === 'undefined') return {...state};
    return {
        ...state,
        queryEntryList: [
            ...state.queryEntryList,
            queryEntry
        ]
    } as QueryBuilderState;
};

export const addQueryBuilderEntryAndRemoveSubset = (state: QueryBuilderState, entry: IQueryBuilderEntry | undefined ) => {
    const queryEntryWithSuperset: IQueryBuilderEntry = entry ? entry : {courseCode: 'undefined'};
    const filteredQueryEntryList = state.queryEntryList.filter(queryEntry => {
        let firstDigitOfCourseNumber = queryEntry.courseNumber ? firstDigit(queryEntry.courseNumber): QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED;
        return !(
            queryEntry.courseCode === queryEntryWithSuperset.courseCode &&
            firstDigitOfCourseNumber === queryEntryWithSuperset.year
        );
    });
    if (queryEntryWithSuperset.courseCode === 'undefined') return {...state};
    return {
        ...state,
        queryEntryList: [
            ...filteredQueryEntryList,
            queryEntryWithSuperset
        ]
    } as QueryBuilderState;
};

export const getCourseNumbersForDisplay = (state: QueryBuilderState, courseNumbersEntry: ICourseNumbers | undefined ) => {
    let courseNumbers: ICourseNumbers[] = state.courseNumbers ? [...state.courseNumbers] : [];
    if(courseNumbersEntry) {
        if(courseNumbers === undefined) courseNumbers = [courseNumbersEntry];
        else if(!courseNumbers.some(courseNumber => courseNumber.courseCode === courseNumbersEntry?.courseCode)) {
            courseNumbers.push(courseNumbersEntry)
        }
    };
    return{
        ...state,
        loading: false,
        courseNumbers: [
            ...courseNumbers
        ]
    } as QueryBuilderState;
};

export const setNewSelectedCourseNumber = (state: QueryBuilderState, courseNumber: number | undefined ) => {
    return {
        ...state,
        courseNumberSelected: courseNumber ? courseNumber : QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED
    } as QueryBuilderState;
};

export const setNewSelectedTerm = (state: QueryBuilderState, term: number | undefined ) => {
    return {
        ...state,
        termSelected: term ? term : QUERY_BUILDER_DATAVALUES.BOTH_TERMS_SELECTED
    } as QueryBuilderState;
};

export const setNewSelectedYear = (state: QueryBuilderState, year: number | undefined ) => {
    // Check that selected course number is within the new filter 
    if( firstDigit(state.courseNumberSelected) !== year && year !== QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED) {
        return {
            ...state,
            yearSelected: year ? year : QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED,
            courseNumberSelected: QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED
        } as QueryBuilderState;
    }
    return {
        ...state,
        yearSelected: year ? year : QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED
    } as QueryBuilderState;
};

export const setNewSelectedCourseCode = (state: QueryBuilderState, courseCode: string | undefined ) => {
    let courseCodeSelected = courseCode ? courseCode : "none";
    // Check if course number selected exists on the new course code, if not default it
    // if( state.yearSelected !== QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED) {
        let courseNumbersForNewCourseCode = state.courseNumbers ? state.courseNumbers.filter(courseNumber => courseNumber.courseCode === courseCodeSelected) : [];
        let courseNumberForNewCourseCode = courseNumbersForNewCourseCode[0];
        if( courseNumberForNewCourseCode !== undefined ) {
            let courseNumberAlreadyExists: boolean = courseNumberForNewCourseCode.numbers.some(courseNumber => {
                // TODO: save numerical numbers in state in the first place cuz this is dum AF
                return parseInt(courseNumber.toString(), 10) === state.courseNumberSelected}
            );
            if(!courseNumberAlreadyExists) return {
                ...state,
                courseCodeSelected,
                courseNumberSelected: QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED
            };
        } else {
            return {
                ...state,
                courseCodeSelected,
                courseNumberSelected: QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED
            };
        }
    // }
    return {
        ...state,
        courseCodeSelected
    };
};

