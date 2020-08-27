import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

import LegendAndLabel from "./LegendAndLabel";
import ErrorMessaging from "./ErrorMessaging";
import Option from "./Option";

const Select = ({ ...props }) => {
  const handleChange = (event) => {
    if (props.onChange && event.target.value) {
      props.onChange(event.target.value);
    }
  };

  const handleBlur = (event) => {
    if (props.onBlur) {
      props.onBlur(event.target.value);
    }
  };

  if (!props.value && props.placeholder) {
    props.value = props.placeholder;
  }

  return (
    <fieldset>
      <LegendAndLabel {...props} />
      <DropDown
        onBlur={(event) => handleBlur(event)}
        required={props.isRequired}
        onChange={(event) => handleChange(event)}
        value={props.value}
      >
        {props.placeholder && <Option disabled>{props.placeholder}</Option>}
        {props.children}
      </DropDown>
      <ErrorMessaging {...props} />
    </fieldset>
  );
};

const DropDown = styled.select`
  background: #ffffff;
  border: none;
  ${({ theme }) => theme && theme.fontSize.regular}
  height: 4rem;
  padding: 0.5rem;
`;

Select.propTypes = {
  isRequired: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  isRequired: false,
  missingMessage: "This field is required.",
};

export default Select;
