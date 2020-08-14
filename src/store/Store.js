import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/RootReducer';

let middleware;

middleware = applyMiddleware(thunk)
export const store = createStore(RootReducer, middleware)
