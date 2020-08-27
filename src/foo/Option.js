import React from "react";

const Option = (props) => {
  return <option {...props}>{props.children}</option>;
};

Option.propTypes = {};

Option.defaultProps = {};

export default Option;
