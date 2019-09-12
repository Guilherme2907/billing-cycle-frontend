import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { Provider } from "react-redux";
import { applyMiddleware,createStore } from "redux";
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import rootReducers from "./main/reducers";

const store = applyMiddleware(multi,thunk)(createStore)(rootReducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
