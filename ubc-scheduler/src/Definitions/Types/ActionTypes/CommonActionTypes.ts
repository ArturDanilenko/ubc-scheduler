import { ICourse, ICourseNumbers } from "../../Interfaces/CommonInterfaces"

export type CourseAction = {
    type: string, 
    courses?: ICourse[],
    courseNumbers?: ICourseNumbers
}
  
export type DispatchTypeCourses = (args: CourseAction) => CourseAction
