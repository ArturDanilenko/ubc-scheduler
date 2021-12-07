import {combineReducers} from 'redux';
import { ApplicationState } from '../../Definitions/Types/StateTypes/CommonStateTypes';
import courseReducer from './courseReducer';
import queryBuilderReducer from './queryBuilderReducer';

export default combineReducers<ApplicationState>({
    courseState: courseReducer,
    queryBuilderState: queryBuilderReducer
});