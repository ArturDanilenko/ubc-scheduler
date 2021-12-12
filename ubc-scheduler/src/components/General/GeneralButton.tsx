import * as React from "react"
import { Alert, Button } from "@mui/material"
import { useDispatch } from "react-redux";
import { IQueryBuilderEntry } from "../../Definitions/Interfaces/QueryBuilderInterfaces";
import { IValidatorReturn, VALIDATOR_RESPONSES } from "../../Definitions/Interfaces/UtilsInterfaces";
import { alertStyles } from './GeneralStyles/generalStyles';

interface IButtonStyle {
    margin: string
};

interface GeneralButtonProps {
    name: string,
    formInput?: IQueryBuilderEntry,
    queryInput?: IQueryBuilderEntry[],
    onClick?: (enteredValues: IQueryBuilderEntry, status: VALIDATOR_RESPONSES) => void,
    submitQuery?: (queryInput: IQueryBuilderEntry[]) => void,
    validator?: (entry: IQueryBuilderEntry, list: IQueryBuilderEntry[]) => IValidatorReturn,
    style?: IButtonStyle
}

const GeneralButton: React.FC<GeneralButtonProps> = (props: GeneralButtonProps) => {
    const dispatch = useDispatch();
    const [alertText, setAlertText] = React.useState('');
    const [alertStyle, setAlertStyle] = React.useState(alertStyles);

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
                    dispatch(props.onClick(entry, response.status));
                }
                else {
                    setAlertText(response.status);
                    setAlertStyle({
                        ...alertStyle,
                        display: 'flex'
                    });
                    setTimeout(function() {
                        setAlertStyle({
                            ...alertStyle,
                            display: 'none'
                        });
                    }, 4000);
                }
            }
        }
    };

    return (
        <React.Fragment>
            <Button sx={props.style} variant="outlined" onClick={handleClick}>{props.name}</Button>
            <Alert sx={{...alertStyle, position: 'absolute'}} severity="warning">{alertText}</Alert>
        </React.Fragment>
    )
}

export default GeneralButton
