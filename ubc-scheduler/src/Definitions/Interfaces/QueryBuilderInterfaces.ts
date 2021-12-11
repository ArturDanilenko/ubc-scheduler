export interface ISelectedData {
    numeric?: number,
    written?: string
}

export interface IQueryBuilderEntry {
    courseCode: string,
    year?: number,
    courseNumber?: number,
    term?: number 
};

export enum QUERY_BUILDER_DATAVALUES {
    NO_YEAR_SELECTED = -1,
    BOTH_TERMS_SELECTED = 3,
    NO_COURSES_SELECTED = 0
};
