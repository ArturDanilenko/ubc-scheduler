import { Box } from "@mui/system";
import * as React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { selectCourseNumbersByCourseCode } from "../../Selectors/courseSelectors";
import { getCourseNumbers } from "../../store/actions/courseActionCreators";
import GeneralForm from "./GeneralForm"

const FilterTab: React.FC = () => {

    const courseNumbers: number[] | string[] = useSelector(
        selectCourseNumbersByCourseCode,
        shallowEqual
    );

    const tempListCode: string[] = [
        "CPEN",
        "ELEC",
        "MATH",
        'FAKE'
    ];
    const tempListYear: number[] = [1, 2, 3, 4];
    const listTerms: string[] = ["1","2","Both"];

    return (
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <GeneralForm name={"Course Code"} entryList={tempListCode} onSelect={getCourseNumbers}/>
            <GeneralForm name={"Year"} entryList={tempListYear}/>
            <GeneralForm name={"Course Number"} entryList={courseNumbers}/>
            <GeneralForm name={"Term"} entryList={listTerms}/>
        </Box>
    )
}

export default FilterTab