import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginReducer } from './loginReducer';
import logger from 'redux-logger'

const rootReducer = combineReducers({
    loginReducer: loginReducer,
  });

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);