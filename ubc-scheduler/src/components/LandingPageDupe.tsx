import * as React from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ICourse } from "../Definitions/Interfaces/CommonInterfaces";
import { ApplicationState } from "../Definitions/Types/StateTypes/CommonStateTypes";
import { getCourses } from "../store/actions/courseActionCreators";
import "../styles.css"
import Course from "./Course";

const LandingPageDupe: React.FC = () => {
    //const [courses, getCourses] = React.useState<ICourse[] | undefined>()
    const courses: readonly ICourse[]|undefined = useSelector(
        (state: ApplicationState) => state.courseState?.courses,
        shallowEqual
    );
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getCourses());
      },[dispatch]);

    return (
    <main>
        <h1>My Courses</h1>
        {courses ? courses.map((course: ICourse) => (
        <Course
            course={course}
        />
        )) : <></>}
    </main>
    )
}

export default LandingPageDupe