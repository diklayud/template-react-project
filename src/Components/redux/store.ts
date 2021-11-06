import { combineReducers, createStore } from "redux";
import { marketDataReducer } from "./dataState";

const reducers = combineReducers({
    marketDataState: marketDataReducer,
});

const store = createStore(reducers);

export default store;