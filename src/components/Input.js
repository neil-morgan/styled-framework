import React, { useState } from "react";
import styled, { css } from "styled-components";
import { fluidRange } from "polished";

export default function Input({
  value,
  type,
  label,
  min,
  max,
  pattern,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  setRef,
  children,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(null);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const handleOnChange = (val) => {
    if (validateValue(val)) {
      onChange(val);
    }
  };

  const validateValue = (val) => {
    if (type === "email") {
      if (val.indexOf("@") === -1) {
        setError("Email is invalid");
      } else {
        setError(null);
      }
    }
    if (val.length > max) {
      return false;
    }
    return true;
  };

  const renderLabel = () => {
    if (label) {
      if (error) {
        return <label>{error}</label>;
      }
      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length || type === "date";

  return (
    <InputContainer focused={isFocused} error={error}>
      {renderLabel()}

      <input
        value={value}
        type={type}
        min={min}
        max={max}
        pattern={pattern}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={(ref) => setRef(ref)}
        {...props}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-bottom: 3rem;
  position: relative;

  & > input,
  select {
    border: 0.1rem solid ${(props) => (props.error ? "#e77674" : "#eee")};
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    color: #000000;
  }

  & > label {
    transition: all 0.2s ease;
    transform-origin: left;
    margin-left: 0;
    color: white;
    ${({ focused }) => focused && css``};
  }
`;

Input.defaultProps = {
  type: "text",
  label: "",
  onChange: (text) => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
};
