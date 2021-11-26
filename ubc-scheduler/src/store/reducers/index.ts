import {combineReducers} from 'redux';
import { ApplicationState } from '../../Definitions/Types/StateTypes/CommonStateTypes';
import courseReducer from './courseReducer';

export default combineReducers<ApplicationState>({
    courseState: courseReducer
});