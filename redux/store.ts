import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {editReducer} from "./reducers/editReducer";


const reducers = combineReducers({
  editReducer,
});

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>

const createStoreNext = () => {

  // @ts-ignore
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
}


export default createStoreNext;