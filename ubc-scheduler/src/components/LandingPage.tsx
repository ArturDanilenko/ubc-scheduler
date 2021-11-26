import * as React from "react"
import { shallowEqual, useSelector } from "react-redux";
import { ICourse } from "../Definitions/Interfaces/CommonInterfaces";
import { ApplicationState } from "../Definitions/Types/StateTypes/CommonStateTypes";
import "../styles.css"
import Course from "./Course";

const LandingPage: React.FC = () => {
    const courses: readonly ICourse[]|undefined = useSelector(
        (state: ApplicationState) => state.courseState?.courses,
        shallowEqual
    );

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

export default LandingPage