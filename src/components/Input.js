import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Fieldset, Label, Error } from "./";

// export default ({ name, label, placeholder, register, errors }) => {
//   return (
//     <Fieldset>
//       {label && (
//         <Label>
//           {label} {errors && <Error.Message error={errors.message} />}
//         </Label>
//       )}
//       <Input>
//         <input
//           type="text"
//           name={name}
//           placeholder={placeholder}
//           ref={register}
//         />
//         {errors && <Error.Highlight />}
//       </Input>
//     </Fieldset>
//   );
// };

// const Input = styled.div`
//   position: relative;
//   overflow: hidden;
//   input {
//     position: relative;
//     width: 100%;
//     height: 4rem;
//     border: 0;
//     border-radius: 0.5rem;
//     padding-left: 2rem;
//     padding-right: 2rem;
//     ${({ theme }) => theme && theme.fontSize.regular}

//     &:focus {
//     }

//     &::placeholder {
//       opacity: 1;
//     }

//     &:disabled {
//       background-color: #f7f7f7;
//     }
//   }
// `;

/**
 * A Plaid-inspired custom input component
 *
 * @param {string} value - the value of the controlled input
 * @param {string} type - the type of input we'll deal with
 * @param {string} label - the label used to designate info on how to fill out the input
 * @param {function} onChange - function called when the input value changes
 * @param {function} onFocus - function called when the input is focused
 * @param {function} onBlur - function called when the input loses focus
 * @param {function} setRef - function used to add this input as a ref for a parent component
 */
const Input = ({
  name,
  placeholder,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  register,
  errors,
  ...props
}) => {
  const [value, setValue] = useState("");
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
    setValue(val);
  };

  const renderLabel = () => {
    if (label) {
      // if we have an error
      if (error) {
        return <label>{error}</label>;
      }

      return <label>{label}</label>;
    }
    return null;
  };

  const isFocused = focused || String(value).length;

  return (
    <InputContainer focused={isFocused} error={error}>
      {renderLabel()}
      <input
        value={value}
        type={type}
        onChange={(e) => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        name={name}
        // placeholder={placeholder}
        ref={register}
        {...props}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  height: 6rem;
  flex-direction: column;
  margin-bottom: 4rem;
  position: relative;

  & > input {
    height: 100%;
    border: 1px solid ${(props) => (props.error ? "#e77674" : "#eee")};
    color: #fff;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    ${({ theme }) => theme && theme.fontSize.regular}
    transition: all 0.2s ease;
    z-index: 500;
  }
  & > label {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%) translateX(0);
    transition: all 0.2s ease;
    z-index: 500;
    ${({ theme }) => theme && theme.fontSize.regular}

    ${(props) =>
      props.focused &&
      css`
        transform: translateY(calc(-50% - 3rem)) translateX(-0.75rem);
        z-index: 501;
        color: #757575;
        background: #000;
        padding: 0 8px;
        ${({ theme }) => theme && theme.fontSize.small}
      `}
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
};

export default Input;
