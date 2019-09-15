import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware,createStore } from "redux";
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import Routes from './main/routes';

import rootReducers from "./main/reducers";

const store = applyMiddleware(multi,thunk)(createStore)(rootReducers)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);
