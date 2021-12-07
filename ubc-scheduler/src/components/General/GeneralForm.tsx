import * as React from "react"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { ISelectedData } from "../../Definitions/Interfaces/CommonInterfaces";
import { queryActionTypes } from "../../Definitions/actionTypes";

interface GeneralFormProps {
    name: string,
    entryList: string[] | number[],
    onSelect?: (code: string) => void,
    onSelect2?: (data: ISelectedData, paramType: queryActionTypes) => void
}

const GeneralForm: React.FC<GeneralFormProps> = (props: GeneralFormProps) => {
    const [value, setValue] = React.useState('');
    
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value as string);
        if(props.onSelect){
            dispatch(props.onSelect(event.target.value));
        }
        if(props.onSelect2){
            let data : ISelectedData = {};
            let type : queryActionTypes;
            data.numeric = parseInt(event.target.value, 10);
            switch(props.name) {
                case "Year":
                    type = queryActionTypes.SET_SELECTED_YEAR;
                    break;
                case "Term":
                    type = queryActionTypes.SET_SELECTED_TERM;
                    break;
                case "Course Number":
                    type = queryActionTypes.SET_SELECTED_COURSE_NUMBER;
                    break;
                //TODO: Add a better defualt
                default: 
                    type = queryActionTypes.SET_SELECTED_COURSE_NUMBER; 
                    break;
            };
            dispatch(props.onSelect2(data, type));
        }
    };

    return (
        <Box sx={{ minWidth: "150px", display: "inline-block", padding: "20px" }}>
            <FormControl fullWidth>
                <InputLabel>{props.name}</InputLabel>
                <Select
                    value={value}
                    placeholder={props.name}
                    label={props.name}
                    onChange={handleChange}
                >
                    {props.entryList.map((entry: string | number) => (
                            <MenuItem value={entry}>{entry}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
  )
}

export default GeneralForm