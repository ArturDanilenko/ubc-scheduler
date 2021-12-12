import axios from "axios";
import { ICourseNumbers } from "../Definitions/Interfaces/CourseInterfaces";

export async function getCourseNumbers (code: string) {
    const response = await axios.get('https://e3f8c00b-640c-4fbc-96ba-f4088d1a532a.mock.pstmn.io/api/v1/courseNumbers/'+code);
    const courseNumbers: ICourseNumbers = {
        courseCode: code,
        numbers: response.data ? response.data : []
    };
    return courseNumbers;
}