import { IQueryBuilderEntry, QUERY_BUILDER_DATAVALUES } from "../Definitions/Interfaces/QueryBuilderInterfaces";
import { IValidatorResponse, VALIDATOR_RESPONSES } from "../Definitions/Interfaces/UtilsInterfaces";
import { firstDigit } from "./commonHelpers";

export const queryBuilderValidator = (entry: IQueryBuilderEntry, list: IQueryBuilderEntry[]) => {
    // prevent duplicates
    // prevent subsets of an existing set from being added
    // remove year if course number is specified
    // remove sets if superset is added

    //Two cases
    // 1) Year filter mod
    // 2) Num filter mod

    // Case 1:
    // Got to check for duplicate filters existing already
    // Remove sets if super set is added

    // Case 2:
    // Prevent subsets if superset exists
    // Set year to unspecified 
    // Check for dupes

    // Determine case:

    let response: IValidatorResponse;
    ({entry, list, response} = entry.courseNumber ? validateCourseNumberFilter(entry, list) : validateYearFilter(entry, list));
    return { entry, response };
}

const validateCourseNumberFilter = (entry: IQueryBuilderEntry, list: IQueryBuilderEntry[]) => {
    // We know there is course number filter coming up
    // Set year to not specifiied
    let response: IValidatorResponse = { status: VALIDATOR_RESPONSES.PASS };
    entry.year = QUERY_BUILDER_DATAVALUES.NO_YEAR_SELECTED;

    // filter out entries that dont match selected course code as they arent relevant
    const reducedList = list.filter( listEntry => listEntry.courseCode === entry.courseCode);

    // Check for dupes, checking course numbers as but also for term similarity
    const duplicate = reducedList.some(listEntry => 
        listEntry.courseNumber === entry.courseNumber && 
        (listEntry.term === entry.term || listEntry.term === QUERY_BUILDER_DATAVALUES.BOTH_TERMS_SELECTED)
    );
    const termAdded = reducedList.some(listEntry => 
        listEntry.courseNumber === entry.courseNumber &&
        (listEntry.term !== entry.term && listEntry.term !== QUERY_BUILDER_DATAVALUES.BOTH_TERMS_SELECTED)
    );
    const subset = reducedList.some(listEntry => {
        const firstDigitOfCourseNumber = entry.courseNumber ? firstDigit(entry.courseNumber) : QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED;
        console.log(firstDigitOfCourseNumber);
        return listEntry.year === firstDigitOfCourseNumber;
    });

    if (duplicate) {
        response = { status: VALIDATOR_RESPONSES.DUPLICATE };
    }
    else if (termAdded) {
        response = { status: VALIDATOR_RESPONSES.UPDATE_COURSE_NUMBER };
    }
    else if (subset) {
        response = { status: VALIDATOR_RESPONSES.SUBSET};
    }
    return {entry, list, response};
};

const validateYearFilter = (entry: IQueryBuilderEntry, list: IQueryBuilderEntry[]) => {
    // Case 1:
    // Got to check for duplicate filters existing already
    // Remove sets if super set is added
    let response: IValidatorResponse = { status: VALIDATOR_RESPONSES.PASS };

    
    // filter out entries that dont match selected course code as they arent relevant
    const reducedList = list.filter( listEntry => listEntry.courseCode === entry.courseCode);

    const duplicate = reducedList.some( listEntry => 
        listEntry.year === entry.year
    );
    
    // its a super set if year set by filter and year of an existing course number are the same
    // on top of that, term of the new filter is either both, either same as the one of the existing course num
    const superSet = reducedList.some( listEntry => {
        const firstDigitOfCourseNumber = listEntry.courseNumber ? firstDigit(listEntry.courseNumber) : QUERY_BUILDER_DATAVALUES.NO_COURSES_SELECTED;
        return entry.year === firstDigitOfCourseNumber && 
        ( 
            entry.term === QUERY_BUILDER_DATAVALUES.BOTH_TERMS_SELECTED || 
            entry.term === listEntry.term
        )
    });

    if (duplicate) {
        response = { status: VALIDATOR_RESPONSES.DUPLICATE };
    }
    else if (superSet) {
        response = { status: VALIDATOR_RESPONSES.SUPER_SET };
    }

    return {entry, list, response};
};