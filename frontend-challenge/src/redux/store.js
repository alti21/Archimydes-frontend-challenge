import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { loginReducer, storyReducer } from './reducers';
import logger from 'redux-logger'
import { roleChange } from './actions';
import { initialState } from './initialState';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    storyReducer: storyReducer
  });

const persistConfig = {
    key: 'data',
    storage: storage,
    whitelist: ['loginReducer', 'storyReducer'] // which reducer want to store
  };
  const pReducer = persistReducer(persistConfig, rootReducer); 

const store = createStore(
    pReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);

const persistor = persistStore(store);

export { persistor, store }