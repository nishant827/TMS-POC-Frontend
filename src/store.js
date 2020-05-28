import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import  persistReducer  from './reducer';
import { persistStore } from 'redux-persist'

const initialState = {}

export const store = createStore(persistReducer, initialState, applyMiddleware(thunk));

export const persistor = persistStore(store);
