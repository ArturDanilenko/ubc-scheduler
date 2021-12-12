import { createStore, applyMiddleware, Store } from "redux"
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState } from "../Definitions/Types/StateTypes/CommonStateTypes";
import { DispatchTypeCourses } from "../Definitions/Types/ActionTypes/CommonActionTypes";
import { initialQueryState } from "./reducers/queryBuilderReducer";
import createSagaMiddleware from "redux-saga";
import { watchSelectedCourseCode } from "./sagas/setSelectedCourseCodeSaga";

const initialState: ApplicationState = {
    courseState: undefined,
    queryBuilderState: initialQueryState
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const composeEnhancers = composeWithDevTools({});
// Use any for now, replace with stricted type
const store: Store<ApplicationState> & {
    dispatch: DispatchTypeCourses
  } = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))

sagaMiddleware.run(watchSelectedCourseCode);

export default store;