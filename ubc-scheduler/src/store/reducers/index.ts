import {combineReducers} from 'redux';
import { ApplicationState } from '../../types/commonTypes';
import articleReducer from './articleReducer';
import courseReducer from './courseReducer';

export default combineReducers<ApplicationState>({
    articleState: articleReducer,
    courseState: courseReducer
});