import { 
    DispatchTypeCourses,
    ICourse,
    CourseAction
} from "../../types/commonTypes"
import * as actionTypes from "../actionTypes"

export function addArticle(course: ICourse) {
    const action: CourseAction = {
        type: actionTypes.ADD_ARTICLE,
        course,
    }

    return (dispatch: DispatchTypeCourses) => {dispatch(action)};
}
  
