import { IQueryBuilderEntry } from "../../Definitions/Interfaces/CommonInterfaces";
import { IFilterByCourseNumber, IFilterByYear, IQuery, IQueryPayload } from "../../Definitions/Interfaces/QueryProcessorInterfaces";

// 0:
// courseCode: "MATH"
// courseNumber: 101
// term: 3
// year: 3

// 1:
// courseCode: "MATH"
// courseNumber: 101
// term: 3
// year: 3

// 2:
// courseCode: "MATH"
// courseNumber: 301
// term: 1
// year: 2

export function queryProcessor (list: IQueryBuilderEntry[]) {
    let query: IQuery = {
        payload: []
    };
    let entriesWithSameName: IQueryBuilderEntry[]
    //Step one
    while (list.length !== 0) {

        // Get specifications for same course code
        let courseCode: string = getCourseCode(list[0]);
        entriesWithSameName = list.filter(entry => entry.courseCode === courseCode);

        // Process specifications into query payload segment for course code
        let queryPayloadForCourseCode = createQueryPayloadForCourseCode(entriesWithSameName);
        query.payload.push(queryPayloadForCourseCode);

        //Remove processed specifications
        list = list.filter( entry => entry.courseCode !== courseCode);

    }

    return query;
};

const getCourseCode = (entry: IQueryBuilderEntry) => entry.courseCode;

const createQueryPayloadForCourseCode = (entries: IQueryBuilderEntry[]) => {
    //We know entries each have same name
    let queryPayload: IQueryPayload = {
        courseCode: "",
        filters: {
            yearFilters: [],
            courseNumberFilters: []
        }
    };

    queryPayload.courseCode = entries[0].courseCode;

    let courseNumberFitlers: IFilterByCourseNumber[] = [];
    let yearFilters: IFilterByYear[] = [];

    // Assuming each entry is unique 
    for (const entry of entries) {
        if (entry.courseNumber) {
            // if there is course number, we know that year doesnt matter
            let courseNumberFitler: IFilterByCourseNumber = {
                courseNumber: entry.courseNumber,
                term: entry.term ? entry.term : 0 //ENUM
            };
            courseNumberFitlers.push(courseNumberFitler);
        }
        else if (entry.year) {
            // Means there is a filter by year and possibly term
            let yearFilter: IFilterByYear = {
                year: entry.year,
                term: entry.term ? entry.term : 0 //ENUM
            };
            yearFilters.push(yearFilter);
        }
        else {
            // this means that user likely wants all the values for the course code...
            // We ideally want to avoid large queries until we tested the final product, so at this time
            // For now, i will return full query and break the loop
            yearFilters = [];
            for(let i = 1; i < 5; i ++) {
                yearFilters.push({
                    year: i,
                    term: 0
                })
            }
            queryPayload.filters.yearFilters = yearFilters;
            return queryPayload;
        }
    };

    queryPayload.filters.yearFilters = yearFilters;
    queryPayload.filters.courseNumberFilters = courseNumberFitlers;

    return queryPayload;
};
