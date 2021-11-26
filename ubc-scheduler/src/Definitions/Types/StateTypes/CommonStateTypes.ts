import { ICourse, ICourseNumbers } from "../../Interfaces/CommonInterfaces"

export interface ApplicationState {
    courseState: CourseState | undefined
}

export type CourseState = {
    courses?: ICourse[],
    courseNumbers?: ICourseNumbers[],
    courseCodeSelected: string,
    loading: boolean
}
