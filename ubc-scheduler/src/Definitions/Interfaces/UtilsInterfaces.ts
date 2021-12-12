import { IQueryBuilderEntry } from "./QueryBuilderInterfaces";

export enum VALIDATOR_RESPONSES {
    DUPLICATE = "DUPLICATE",
    SUBSET = "SUBSET",
    SUPER_SET = "SUPER_SET",
    UPDATE_COURSE_NUMBER = "UPDATE COURSE NUMBER",
    PASS = "PASS"
};

export interface IValidatorResponse {
    status: VALIDATOR_RESPONSES
};

export interface IValidatorReturn {
    entry: IQueryBuilderEntry,
    response: IValidatorResponse
}