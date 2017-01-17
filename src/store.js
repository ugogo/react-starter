import { applyMiddleware, compose, createStore } from "redux";
import { Iterable } from "immutable";
import { combineReducers } from "redux-immutable";
import reducers from "./reducers.js";
import thunk from "redux-thunk";

const middlewares = [
  thunk,
];

if (process.env.NODE_ENV === "development") {
  const logger = require("redux-logger")({
    stateTransformer: (state) =>
      Iterable.isIterable(state) ? state.toJS() : state
    ,
  });

  middlewares.push(logger);
}

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

export default store;
