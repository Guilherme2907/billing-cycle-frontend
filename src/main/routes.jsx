import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import DashBoard from "../dashboard2/dashboard2";
import BillingCycles from "../billingCycles/billingCycles";

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={DashBoard} />
    <Route path="/billingCycles" component={BillingCycles} />
    <Redirect from="*" to="/" />
  </Router>
);
