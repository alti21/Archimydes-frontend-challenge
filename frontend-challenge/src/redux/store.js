import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginReducer } from './reducers';
import logger from 'redux-logger'
import { roleChange } from './actions';

const rootReducer = combineReducers({
    loginReducer: loginReducer
    //role: roleReducer
  });

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);