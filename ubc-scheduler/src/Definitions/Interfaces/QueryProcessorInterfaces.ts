export interface IQuery {
    payload: IQueryPayload[]
};

export interface IQueryPayload {
    courseCode: string,
    filters: IFilters
};

export interface IFilters {
    yearFilters: IFilterByYear[],
    courseNumberFilters: IFilterByCourseNumber[]
};

export interface IFilterByYear {
    year: number,
    term?: number
};

export interface IFilterByCourseNumber {
    courseNumber: number,
    term?: number
};