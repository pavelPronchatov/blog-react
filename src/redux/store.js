import {combineReducers, compose, createStore} from "redux";
import {editReducer} from "./reducer/editReducer";


const reducers = combineReducers({
  editReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(reducers, composeEnhancers());