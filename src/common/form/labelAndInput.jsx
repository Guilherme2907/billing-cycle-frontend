import React from "react";
import Grid from "../layout/grid";

export default props => (
  <Grid cols={props.cols}>
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        {...props.input}
        type={props.type}
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        className="form-control"
      />
    </div>
  </Grid>
);
