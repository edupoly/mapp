import CounterReducer from "./conterReducer";
import todoReducer from "./todoReducer";
import {combineReducers} from 'redux';
var reducer = combineReducers({counter:CounterReducer,todos:todoReducer})
export default reducer