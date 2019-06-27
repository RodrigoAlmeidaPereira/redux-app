import { combineReducers } from 'redux';
import { clickReducer } from "./clickReducer";
import { clickClearReducer } from "./clickClearReducer";

export const Reducers = combineReducers({clickState: clickReducer, clickClearState: clickClearReducer});