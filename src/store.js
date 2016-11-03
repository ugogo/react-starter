import { combineReducers } from 'redux-immutable';
import { compose, createStore } from 'redux';
import reducers from './reducers.js';

const store = createStore(
  combineReducers(reducers),
  compose(
    // Redux dev tools
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
