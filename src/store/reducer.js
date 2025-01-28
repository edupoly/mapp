import CounterReducer from "./conterReducer";
import todoReducer from "./todoReducer";
import {combineReducers} from 'redux';
import quizReducer from "./quizReducer";
var reducer = combineReducers({counter:CounterReducer,todos:todoReducer,quiz:quizReducer})
export default reducer