import React from "react";
import styled from "styled-components/macro";

const RadioGroup = ({ name, label, options, register }) => {
  return (
    <Field>
      <Label>{label}</Label>
      {options.map(([text, value], i) => (
        <React.Fragment key={i}>
          <Radio htmlFor={text}>
            <Input
              type="radio"
              name={name}
              value={value}
              id={text}
              ref={register}
            />
            <span></span>
            {text}
          </Radio>
        </React.Fragment>
      ))}
    </Field>
  );
};

const Field = styled.fieldset`
  display: flex;
`;

const Label = styled.label`
  color: #ffffff;
`;

const Radio = styled.label`
  cursor: pointer;
  display: flex;
  position: relative;
  color: #fff;

  span {
    position: relative;
    display: block;
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.text};
    border-radius: 100%;
    -webkit-tap-highlight-color: transparent;
    &:after {
      content: "";
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      background: ${({ theme }) => theme.colors.primary};
      transform: scale(0);
      transition: all 600ms ease;
      opacity: 0.08;
      pointer-events: none;
    }
  }
  &:hover {
    span {
      &:after {
        transform: scale(3.6);
      }
    }
  }
`;

const Input = styled.input`
  display: none;
  &:checked {
    & + span {
      border-color: ${({ theme }) => theme.colors.primary};
      &:after {
        transform: scale(1);
        transition: all 600ms cubic-bezier(0.35, 0.9, 0.4, 0.9);
        opacity: 1;
      }
    }
  }
`;

export default RadioGroup;
