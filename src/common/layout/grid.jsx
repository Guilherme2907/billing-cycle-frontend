import React from "react";

export default props => {
  const toCssClass = (numbers = "12") => {
    const colunms = numbers.split(" ");
    let classes = '';

    if(colunms[0]) {classes += `col-xs-${colunms[0]} `}
    if(colunms[1]) {classes += `col-sm-${colunms[1]} `}
    if(colunms[2]) {classes += `col-md-${colunms[2]} `}
    if(colunms[3]) {classes += `col-lg-${colunms[3]}`}

    return classes;
  };

  const classe = toCssClass(props.cols); 
  return (
      <div className={classe}>
          {props.children}
      </div>
  )
};
