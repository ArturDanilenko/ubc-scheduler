import {combineReducers} from 'redux';
import { ApplicationState } from '../../types/commonTypes';
import articleReducer from './articleReducer';

export default combineReducers<ApplicationState>({
    articleState: articleReducer
});