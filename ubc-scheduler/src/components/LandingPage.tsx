import { Box } from "@mui/material";
import * as React from "react"
import { shallowEqual, useSelector } from "react-redux";
import { IQueryBuilderEntry } from "../Definitions/Interfaces/QueryBuilderInterfaces";
import { selectQueriedCourses } from "../Selectors/queryBuilderSelectors";
import { processQuery } from "../store/actions/courseActionCreators";
import "../styles.css"
import FilterTab from "./FilterSelection/FilterTab";
import SelectedCourseDisplay from "./FilterSelection/SelectedCourseDisplay";
import GeneralButton from "./General/GeneralButton";

const LandingPage: React.FC = () => {
    const queriedCourses: IQueryBuilderEntry[] = useSelector(
        selectQueriedCourses,
        shallowEqual
    );

    return (
        <React.Fragment>
            <FilterTab/>
            <SelectedCourseDisplay/>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <GeneralButton name={"Fetch course info"} queryInput={queriedCourses} submitQuery={processQuery}/>
            </Box>
        </React.Fragment>
    )
}

export default LandingPage