import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import LegendAndLabel from "./LegendAndLabel";
import ErrorMessaging from "./ErrorMessaging";

const Input = (props) => {
  console.log(props.register);
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

  return (
    <fieldset>
      <LegendAndLabel {...props} />
      <FieldInput
        onBlur={(event) => handleBlur(event)}
        required={props.isRequired}
        onChange={(event) => handleChange(event)}
        ref={props.register}
      />
      <ErrorMessaging {...props} />
    </fieldset>
  );
};

const FieldInput = styled.input`
  ${({ theme }) => theme && theme.fontSize.regular}
  display: inline-block;
  padding: 0 8px;
  margin-bottom: 10px;
  vertical-align: middle;
  border-radius: 2px;
  min-width: 50px;
  max-width: 500px;
  width: 100%;
  min-height: 36px;
  background-color: white;
  border: 1px solid black;
  transition: all 0.2s ease-in-out 0s;
  box-sizing: border-box;
`;

Input.propTypes = {
  isRequired: PropTypes.bool, //should this input be filled in?
  name: PropTypes.string.isRequired, //the name of the element. Used to send data to the server
  onBlur: PropTypes.func, //called when the user leaves the input
  onChange: PropTypes.func, //called when the value changes
  value: PropTypes.string, //the value to show
};

Input.defaultProps = {
  isRequired: false,
  type: "text",
  missingMessage: "This field is required.",
};

export default Input;
