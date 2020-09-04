import React from "react";
import styled from "styled-components/macro";
import { Fieldset, Label, Error } from "./";

export default ({ name, label, options, register, errors }) => {
  return (
    <Fieldset>
      <Label>{label}</Label>
      {options.map(([text, value], i) => (
        <Radio key={name + i}>
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
    </Fieldset>
  );
};

const Radio = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    ${({ theme }) => theme && theme.fontSize.regular}
    &:before {
      content: "";
      background: ${({ theme }) => theme.colors.grey};
      border-radius: 100%;
      border: 1px solid darken(${({ theme }) => theme.colors.grey}, 25%);
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
          background-color: #fff;
          box-shadow: inset 0 0 0 0.4rem ${({ theme }) => theme.colors.green};
        }
      }
    }
    &:focus {
      + label {
        &:before {
          outline: none;
          border-color: #fff;
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
