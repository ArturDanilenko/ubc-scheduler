import { Box } from "@mui/system";
import * as React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { IQueryBuilderEntry } from "../../Definitions/Interfaces/QueryBuilderInterfaces";
import { selectCourseNumbersByCourseCode, selectFormFields, selectQueriedCourses } from "../../Selectors/queryBuilderSelectors";
import { addQueryBuilderEntry, setSelectedParameters } from "../../store/actions/queryBuilderActions";
import { queryBuilderValidator } from "../../Utils/QueryBuilderValidation";
import GeneralButton from "../General/GeneralButton";
import GeneralForm from "../General/GeneralForm"

const FilterTab: React.FC = () => {

    const queriedCourses: IQueryBuilderEntry[] = useSelector(
        selectQueriedCourses,
        shallowEqual
    );

    const courseNumbers: number[] | string[] = useSelector(
        selectCourseNumbersByCourseCode,
        shallowEqual
    );

    const formEntries: IQueryBuilderEntry = useSelector(
        selectFormFields,
        shallowEqual
    );

    const tempListCode: string[] = [
        "CPEN",
        "ELEC",
        "MATH",
        'FAKE'
    ];
    const tempListYear: string[] = ['All', '1', '2', '3', '4'];
    const listTerms: string[] = ["1","2","Both"];

    return (
        <Box sx={{display:"flex", justifyContent:"center"}}>
            <GeneralForm name={"Course Code"} entryList={tempListCode} onSelect={setSelectedParameters}/>
            <GeneralForm name={"Year"} entryList={tempListYear} onSelect={setSelectedParameters}/>
            <GeneralForm name={"Course Number"} entryList={courseNumbers} onSelect={setSelectedParameters}/>
            <GeneralForm name={"Term"} entryList={listTerms} onSelect={setSelectedParameters}/>
            <GeneralButton 
                name={'Add criteria'}
                formInput={formEntries}
                onClick={addQueryBuilderEntry}
                queryInput={queriedCourses}
                validator={queryBuilderValidator}
                style={{margin: '20px'}}
            />
        </Box>
    )
}

export default FilterTab