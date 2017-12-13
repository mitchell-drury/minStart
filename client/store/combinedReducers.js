import { createStore, combineReducers, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import user from './userReducer';

const reducer = combineReducers({user});

let middleware = composeWithDevTools(applyMiddleware(logger));

const store = createStore(reducer,middleware);

export default store;