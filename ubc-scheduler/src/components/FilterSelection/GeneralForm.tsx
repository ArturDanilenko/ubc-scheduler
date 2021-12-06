import * as React from "react"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";

interface GeneralFormProps {
    name: string,
    entryList: string[] | number[],
    onSelect?: (code: string) => void
}

const GeneralForm: React.FC<GeneralFormProps> = (props: GeneralFormProps) => {
    const [value, setValue] = React.useState('');
    
    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value as string);
        if(props.onSelect){
            dispatch(props.onSelect(event.target.value));
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