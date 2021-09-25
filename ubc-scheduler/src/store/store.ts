import { createStore, applyMiddleware, Store } from "redux"
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { 
  DispatchType 
} from "../types/commonTypes";
import { composeWithDevTools } from 'redux-devtools-extension';
import { ApplicationState } from "../types/commonTypes"

const initialState: ApplicationState = {
  articleState: undefined
}

const composeEnhancers = composeWithDevTools({});
// Use any for now, replace with stricted type
const store: Store<ApplicationState> & {
    dispatch: DispatchType
  } = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;