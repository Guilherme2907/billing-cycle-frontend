import React from "react";
import Grid from "../layout/grid";

export default props => (
  <input
    {...props.input}
    type={props.type}
    className="form-control"
    readOnly={props.readOnly}
    placeholder={props.placeholder}
  />
);
