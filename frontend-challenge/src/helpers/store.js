import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
  });

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);