import React from "react";

export default (props) => {
  return <option {...props}>{props.children}</option>;
};
