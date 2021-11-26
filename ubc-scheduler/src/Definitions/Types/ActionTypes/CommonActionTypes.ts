import { ICourse } from "../../Interfaces/CommonInterfaces"

export type CourseAction = {
    type: string, 
    courses?: ICourse[]
}
  
export type DispatchTypeCourses = (args: CourseAction) => CourseAction