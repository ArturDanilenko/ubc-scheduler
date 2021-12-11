import * as React from "react"
import { Alert, Button } from "@mui/material"
import { useDispatch } from "react-redux";
import { IQueryBuilderEntry } from "../../Definitions/Interfaces/QueryBuilderInterfaces";
import { IValidatorReturn, VALIDATOR_RESPONSES } from "../../Definitions/Interfaces/UtilsInterfaces";

interface IButtonStyle {
    margin: string
};

interface IAlertStyle {
    display: string
};

interface GeneralButtonProps {
    name: string,
    formInput?: IQueryBuilderEntry,
    queryInput?: IQueryBuilderEntry[],
    onClick?: (enteredValues: IQueryBuilderEntry) => void,
    submitQuery?: (queryInput: IQueryBuilderEntry[]) => void,
    validator?: (entry: IQueryBuilderEntry, list: IQueryBuilderEntry[]) => IValidatorReturn,
    style?: IButtonStyle
}

const GeneralButton: React.FC<GeneralButtonProps> = (props: GeneralButtonProps) => {
    const dispatch = useDispatch();

    let alertStyle: IAlertStyle = {display: 'none'};
    let alertText: string = "";

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

            if(props.onClick && props.validator && props.queryInput){
                const {entry, response} = props.validator(inputValue, props.queryInput);
                console.log(response);
                if (response.status !== VALIDATOR_RESPONSES.DUPLICATE && response.status !== VALIDATOR_RESPONSES.SUBSET) {
                    dispatch(props.onClick(inputValue));
                }
                else {
                    alertText = response.status;
                    alertStyle.display = 'block';
                    // setTimeout(function() {
                    //     alertStyle.display = 'none';
                    // }, 4000);
                }
            }
        }
    };

    return (
        <React.Fragment>
            <Button sx={props.style} variant="outlined" onClick={handleClick}>{props.name}</Button>
            <Alert sx={alertStyle} severity="warning">{alertText}</Alert>
        </React.Fragment>
    )
}

export default GeneralButton
