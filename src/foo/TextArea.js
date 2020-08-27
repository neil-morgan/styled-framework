import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

import LegendAndLabel from "./LegendAndLabel";
import ErrorMessaging from "./ErrorMessaging";

const TextArea = ({ ...props }) => {
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

  //use the handlers here before the ones in the props

  return (
    <fieldset>
      <LegendAndLabel {...props} />
      <AreaInput
        onBlur={(event) => handleBlur(event)}
        required={props.isRequired}
        onChange={(event) => handleChange(event)}
      />
      <ErrorMessaging {...props} />
    </fieldset>
  );
};

const AreaInput = styled.textarea`
  ${({ theme }) => theme && theme.fontSize.regular}
  display: inline-block;
  padding: 0 8px;
  margin-bottom: 24px;
  vertical-align: middle;
  border-radius: 2px;
  min-width: 50px;
  max-width: 500px;
  min-height: 100px;
  width: 100%;
  background-color: white;
  border: 1px solid black;
  transition: all 0.2s ease-in-out 0s;
`;

TextArea.propTypes = {
  className: PropTypes.string, //the class to add to the wrapper
  errorMessage: PropTypes.string, //Text to show if there is a validation error
  hasError: PropTypes.bool, //is there a validation error
  isMissing: PropTypes.bool, //is the value missing
  isRequired: PropTypes.bool, //should this TextArea be filled in?
  label: PropTypes.string, //the label text to show
  legend: PropTypes.string, //the legend text to show
  missingMessage: PropTypes.string, //Text to show if there is no value andthe urser tries to submit
  name: PropTypes.string.isRequired, //the name of the element. Used to send data to the server
  onBlur: PropTypes.func, //called when the user leaves the TextArea
  onChange: PropTypes.func, //called when the value changes
  shouldPreventInvalid: PropTypes.bool, // stop the input of invalid characters
  validation: PropTypes.func, //a function to call to see if this field is valid
  value: PropTypes.string, //the value to show
  placeholder: PropTypes.string, //the placeholder text
};

TextArea.defaultProps = {
  isRequired: false,
  missingMessage: "This field is required.",
};

export default TextArea;
