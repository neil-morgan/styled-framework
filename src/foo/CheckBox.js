import React from "react";
import PropTypes from "prop-types";
import LegendAndLabel from "./LegendAndLabel";
import ErrorMessaging from "./ErrorMessaging";

const CheckBox = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event.target.checked ? event.target.checked : "");
    }
  };

  const handleBlur = (event) => {
    if (props.onBlur) {
      props.onBlur(event.target.checked ? event.target.checked : "");
    }
  };

  const { name, isRequired, value, checked } = props;

  return (
    <fieldset>
      <LegendAndLabel legend={props.legend} />
      <input
        type="checkbox"
        name={name}
        onBlur={(event) => handleBlur(event)}
        required={isRequired}
        onChange={(event) => handleChange(event)}
        checked={checked}
        value={value}
      />
      <label>{props.label}</label>
      <ErrorMessaging {...props} />
    </fieldset>
  );
};

CheckBox.propTypes = {
  isMissing: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  legend: PropTypes.string,

  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
};

CheckBox.defaultProps = {
  isRequired: false,
  checked: false,
  value: "on",
  missingMessage: "This field is required.",
};

export default CheckBox;
