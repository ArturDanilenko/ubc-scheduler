import * as React from "react"
import { ICourse } from "../Definitions/Interfaces/CommonInterfaces";

type Props = {
  course: ICourse
}

const Course: React.FC<Props> = ({course}) => {
  return (
    <div className="Article">
      <div>
        <h1>{course.courseId}</h1>
        <p>{course.courseName}</p>
        <p>{course.courseDescription}</p>
      </div>
    </div>
  )
};

export default Course;