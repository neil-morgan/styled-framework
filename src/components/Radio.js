import React from "react";
import styled from "styled-components/macro";
import { Text, Error } from "./";

const { Label } = Text;

export default ({ name, label, options, register, errors }) => {
  return (
    <Field>
      <Label>{label}</Label>
      {options.map(([text, value], i) => (
        <Radio>
          <input
            type="radio"
            name={name}
            value={value}
            id={name + i}
            ref={register}
          />
          <label htmlFor={name + i}>{text}</label>
        </Radio>
      ))}
      {errors ? <Error error={errors.message} /> : undefined}
    </Field>
  );
};

const Field = styled.fieldset`
  display: flex;
  color: #ffffff;
`;

const Radio = styled.div`
  display: flex;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: flex;
    align-items: center;
    &:before {
      content: "";
      background: #f4f4f4;
      border-radius: 100%;
      border: 1px solid darken(#f4f4f4, 25%);
      display: inline-block;
      width: 2rem;
      height: 2rem;
      position: relative;
      top: 0;
      margin-right: 1em;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all 250ms ease;
    }
  }

  input[type="radio"] {
    display: none;
    position: absolute;
    opacity: 0;

    &:checked {
      + label {
        &:before {
          background-color: ${({ theme }) => theme.colors.primary};
          box-shadow: inset 0 0 0 0.2rem #f4f4f4;
        }
      }
    }
    &:focus {
      + label {
        &:before {
          outline: none;
          border-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    &:disabled {
      + label {
        &:before {
          box-shadow: inset 0 0 0 4px #f4f4f4;
          border-color: darken(#f4f4f4, 25%);
          background: darken(#f4f4f4, 25%);
        }
      }
    }
    + label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
`;
