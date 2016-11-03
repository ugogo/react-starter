import { combineReducers } from 'redux-immutable';
import { createStore } from 'redux';
import reducers from './reducers.js';

const store = createStore(
  combineReducers(reducers)
);

export default store;
