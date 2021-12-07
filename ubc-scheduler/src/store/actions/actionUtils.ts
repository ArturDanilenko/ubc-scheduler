import { queryActionTypes } from "../../Definitions/actionTypes";

export const getActionTypeByFieldName = ( name: string ) => {
    let type: queryActionTypes;
    switch(name) {
        case "Year":
            type = queryActionTypes.SET_SELECTED_YEAR;
            break;
        case "Term":
            type = queryActionTypes.SET_SELECTED_TERM;
            break;
        case "Course Number":
            type = queryActionTypes.SET_SELECTED_COURSE_NUMBER;
            break;
        case "Course Code":
            type = queryActionTypes.SET_SELECTED_COURSE_CODE;
            break;
        //TODO: Add a better defualt
        default: 
            type = queryActionTypes.SET_SELECTED_COURSE_NUMBER; 
            break;
    };
    return type;
}