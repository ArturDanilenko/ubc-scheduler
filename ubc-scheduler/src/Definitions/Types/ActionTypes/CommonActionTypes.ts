import { IQueryBuilderEntry } from "../../Interfaces/QueryBuilderInterfaces";
import { ICourse, ICourseNumbers } from "../../Interfaces/CourseInterfaces";

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
