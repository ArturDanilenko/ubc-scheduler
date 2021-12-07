import * as React from "react"
import { Button } from "@mui/material"
import { useDispatch } from "react-redux";
import { IQueryBuilderEntry } from "../../Definitions/Interfaces/CommonInterfaces";

interface GeneralButtonProps {
    name: string,
    formInput?: IQueryBuilderEntry,
    onClick?: (enteredValues: IQueryBuilderEntry) => void
}

const GeneralButton: React.FC<GeneralButtonProps> = (props: GeneralButtonProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if(!props.formInput?.courseCode) alert("You have to enter at least course code...");

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
            <Button onClick={handleClick}>{props.name}</Button>
        </React.Fragment>
    )
}

export default GeneralButton
