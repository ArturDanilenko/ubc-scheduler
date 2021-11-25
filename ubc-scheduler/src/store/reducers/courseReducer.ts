import * as actionTypes from "../actionTypes";
import {
  CourseState,
  CourseAction,
  ICourse
} from "../../types/commonTypes";

export const initialCourseState: CourseState = {
  courses: [
    {
        id: 1,
        courseId: "ELEC221",
        courseCode: "ELEC",
        courseNumber: "221",
        sections: "202",
        prerequisites: "PHYS157",
        corequisites: "",
        requiredSections: "LABARATORY, LECTURE",
        credits: 2,
        year: 2
        },
    {
        id: 2,
        courseId: "ELEC321",
        courseCode: "ELEC",
        courseNumber: "321",
        sections: "102",
        prerequisites: "ELEC221",
        corequisites: "",
        requiredSections: "LECTURE, TUTORIAL",
        credits: 4,
        year: 3
    },
    {
        id: 3,
        courseId: "ELEC331",
        courseCode: "ELEC",
        courseNumber: "331",
        sections: "101",
        prerequisites: "CPSC259",
        corequisites: "",
        requiredSections: "LECTURE, TUTORIAL",
        credits: 4,
        year: 3
        }
    ]
}

const courseReducer = (
    state: CourseState = initialCourseState,
    action: CourseAction
  ): CourseState => {
    switch (action.type) {
      case actionTypes.ADD_COURSE:
        const newCourse: ICourse = {
            id: 1,
            courseId: "ELEC221",
            courseCode: "ELEC",
            courseNumber: "221",
            sections: "202",
            prerequisites: "PHYS157",
            corequisites: "",
            requiredSections: "LABARATORY, LECTURE",
            credits: 2,
            year: 2
        }
        return {
          ...state,
          courses: state.courses.concat(newCourse),
        }
      default: 
        return state;
    }
  }

  export const courseSelector = (state: CourseState, code: string) => state.courses.filter(course => course.courseCode === code);
  
  export default courseReducer;