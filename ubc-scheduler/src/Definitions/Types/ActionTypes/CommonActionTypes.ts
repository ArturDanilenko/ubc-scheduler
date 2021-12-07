import { ICourse, ICourseNumbers, IQueryBuilderEntry } from "../../Interfaces/CommonInterfaces";

export type CourseAction = {
    type: string, 
    courses?: ICourse[],
};

export type QueryBuilderAction = {
    type: string,
    queryEntry?: IQueryBuilderEntry,
    courseCode?: string,
    courseNumbers?: ICourseNumbers
    year?: number,
    term?: number,
    courseNumber?: number
};
  
export type DispatchTypeCourses = (args: CourseAction) => CourseAction;
export type DispatchTypeQueryBuilder = (args: QueryBuilderAction) => QueryBuilderAction;
