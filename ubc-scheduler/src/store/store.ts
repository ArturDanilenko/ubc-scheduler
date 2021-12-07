import { createStore, applyMiddleware, Store } from "redux"
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState } from "../Definitions/Types/StateTypes/CommonStateTypes";
import { DispatchTypeCourses } from "../Definitions/Types/ActionTypes/CommonActionTypes";
import { initialQueryState } from "./reducers/queryBuilderReducer";

const initialState: ApplicationState = {
    courseState: undefined,
    queryBuilderState: initialQueryState
}

const composeEnhancers = composeWithDevTools({});
// Use any for now, replace with stricted type
const store: Store<ApplicationState> & {
    dispatch: DispatchTypeCourses
  } = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;