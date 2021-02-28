import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {editReducer} from "./reducer/editReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
  editReducer,
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store: AppStateType = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
