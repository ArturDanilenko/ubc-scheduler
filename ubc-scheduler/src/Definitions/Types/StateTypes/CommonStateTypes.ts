import { ICourse } from "../../Interfaces/CommonInterfaces"

export interface ApplicationState {
    courseState: CourseState | undefined
}

export type CourseState = {
    courses?: ICourse[],
    loading: boolean
}
