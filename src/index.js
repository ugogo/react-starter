import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import React from "react";
import { render } from "react-dom";
import routes from "./routes.js";
import store from "./store.js";

import "./index.css";

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("root")
);
