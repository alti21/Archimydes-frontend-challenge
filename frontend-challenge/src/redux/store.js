import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginReducer, storyReducer } from './reducers';
import logger from 'redux-logger'
import { roleChange } from './actions';
import { initialState } from './initialState';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    storyReducer: storyReducer
  });

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);