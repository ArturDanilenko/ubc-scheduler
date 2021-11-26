import { Box } from "@mui/system"
import * as React from "react"
import { shallowEqual, useSelector } from "react-redux";
import { ICourseNumbers } from "../../Definitions/Interfaces/CommonInterfaces";
import { ApplicationState } from "../../Definitions/Types/StateTypes/CommonStateTypes";
import { getCourseNumbers } from "../../store/actions/courseActionCreators";
import GeneralForm from "./GeneralForm"

const FilterTab: React.FC = () => {
  //export const courseSelector = (state: CourseState, code: string) => state.courses.filter(course => course.courseCode === code);

    const courseNumbers: readonly ICourseNumbers[]|undefined = useSelector(
        (state: ApplicationState) => state.courseState?.courseNumbers,
        shallowEqual
    );

    const selectedCourseCode: string|undefined = useSelector(
        (state: ApplicationState) => state.courseState?.courseCodeSelected,
        shallowEqual
    );

    const courseNumbersListArray = courseNumbers?.filter(courseNumber => courseNumber.courseCode ===selectedCourseCode);

    const tempListCode: string[] = [
        "CPEN",
        "ELEC",
        "MATH"
    ];
    const tempListYear: number[] = [1, 2, 3, 4];
    const tempListNumber: string[] = ["100", "101", "202"];
    const listTerms: string[] = ["1","2","Both"];

    let courseNumbersList = courseNumbersListArray ? (courseNumbersListArray[0] ? courseNumbersListArray[0].numbers: tempListNumber) : tempListNumber;

    if(courseNumbersList.length<0){
        courseNumbersList = tempListNumber;
    }

    return (
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <GeneralForm name={"Course Code"} entryList={tempListCode} onSelect={getCourseNumbers}/>
            <GeneralForm name={"Year"} entryList={tempListYear}/>
            <GeneralForm name={"Course Number"} entryList={courseNumbersList}/>
            <GeneralForm name={"Term"} entryList={listTerms}/>
        </Box>
    )
}

export default FilterTab