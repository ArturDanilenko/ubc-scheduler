import * as React from "react"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { ISelectedData } from "../../Definitions/Interfaces/CommonInterfaces";
import { queryActionTypes } from "../../Definitions/actionTypes";
import { getActionTypeByFieldName } from "../../store/actions/actionUtils";

interface GeneralFormProps {
    name: string,
    entryList: string[] | number[],
    onSelect?: (data: ISelectedData, paramType: queryActionTypes) => void,
}

const GeneralForm: React.FC<GeneralFormProps> = (props: GeneralFormProps) => {
    const [value, setValue] = React.useState('');
    
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value as string);
        if(props.onSelect){
            let data : ISelectedData = {};
            let type : queryActionTypes = getActionTypeByFieldName(props.name);;
            if (type === queryActionTypes.SET_SELECTED_COURSE_CODE) data.written = event.target.value;
            else data.numeric = parseInt(event.target.value, 10);
            dispatch(props.onSelect(data, type));
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
                            <MenuItem key={entry} value={entry}>{entry}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
  )
}

export default GeneralForm