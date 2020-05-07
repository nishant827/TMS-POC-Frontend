import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';

const initialState = {}

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk))