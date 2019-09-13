import React from "react";

export default props => (
  <button type={props.type} className={`btn btn-${props.classe}`} onClick={props.onClick}>
    <i className={`fa fa-${props.icon}`}></i>
    {props.children}
  </button>
);
