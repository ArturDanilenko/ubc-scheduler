import axios from "axios";
import { ICourseNumbers } from "../Definitions/Interfaces/CourseInterfaces";

export async function getCourseNumbers (code: string) {
    const response = await axios.get('https://f1c9150b-8e43-493b-a623-7a449ef35e44.mock.pstmn.io/api/v1/courseNumbers/'+code);
    const courseNumbers: ICourseNumbers = {
        courseCode: code,
        numbers: response.data ? response.data : []
    };
    return courseNumbers;
}