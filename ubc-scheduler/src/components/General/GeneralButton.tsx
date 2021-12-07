import * as React from "react"
import { Button } from "@mui/material"
import { useDispatch } from "react-redux";
import { IQueryBuilderEntry } from "../../Definitions/Interfaces/CommonInterfaces";

interface IButtonStyle {
    margin: string
};

interface GeneralButtonProps {
    name: string,
    formInput?: IQueryBuilderEntry,
    queryInput?: IQueryBuilderEntry[],
    onClick?: (enteredValues: IQueryBuilderEntry) => void,
    submitQuery?: (queryInput: IQueryBuilderEntry[]) => void,
    style?: IButtonStyle
}

const GeneralButton: React.FC<GeneralButtonProps> = (props: GeneralButtonProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (props.submitQuery && (!props.queryInput || props.queryInput.length === 0)) alert('Please select some course criteria');
        else if(props.submitQuery && props.queryInput) dispatch(props.submitQuery(props.queryInput));
        else if(!props.formInput?.courseCode) alert("You have to enter at least course code...");
        else {
            const inputValue: IQueryBuilderEntry = {
                courseCode: props.formInput.courseCode,
                year: props.formInput.year,
                courseNumber: props.formInput.courseNumber,
                term: props.formInput.term
            };

            if(props.onClick){
                dispatch(props.onClick(inputValue));
            }
        }
    };

    return (
        <React.Fragment>
            <Button sx={props.style} variant="outlined" onClick={handleClick}>{props.name}</Button>
        </React.Fragment>
    )
}

export default GeneralButton
