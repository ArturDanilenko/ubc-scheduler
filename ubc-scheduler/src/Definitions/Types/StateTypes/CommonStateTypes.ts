import {
    ICourse,
    ICourseNumbers,
    IQueryBuilderEntry
} from "../../Interfaces/CommonInterfaces";

export interface ApplicationState {
    courseState: CourseState | undefined,
    queryBuilderState: QueryBuilderState
};

export type CourseState = {
    courses?: ICourse[],
    loading: boolean
};

export type QueryBuilderState = {
    queryEntryList: IQueryBuilderEntry[],
    courseNumbers?: ICourseNumbers[],
    courseCodeSelected: string,
    courseNumberSelected: number,
    yearSelected: number,
    termSelected: number,
    loading: boolean
};
