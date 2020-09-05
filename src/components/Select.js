import React from "react";
import styled from "styled-components/macro";
import { Fieldset, Label, Error } from "./";

export default ({ name, label, placeholder, options, register, errors }) => {
  return (
    <Fieldset>
      {label && (
        <Label>
          {label} {errors && <Error.Message error={errors.message} />}
        </Label>
      )}
      <DropDown>
        <select name={name} defaultValue={""} ref={register}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(([text, value], i) => (
            <option key={i} value={value}>
              {text}
            </option>
          ))}
        </select>
        {errors && <Error.Highlight />}
      </DropDown>
    </Fieldset>
  );
};
const DropDown = styled.div`
  position: relative;
  overflow: hidden;
  height: 4rem;
  background: #f2f2f2;
  border-radius: 0.5rem;
  background-image: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.06)
  );

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 1.5rem;
    right: 2rem;
    width: 0;
    height: 0;
    border: 4px dashed;
    border-color: #000 transparent;
    pointer-events: none;
  }
  &::before {
    border-bottom-style: solid;
    border-top: none;
  }
  &::after {
    margin-top: 7px;
    border-top-style: solid;
    border-bottom: none;
  }

  select {
    cursor: pointer;
    display: flex;
    position: relative;
    width: 130%;
    height: 100%;
    margin: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    ${({ theme }) => theme && theme.fontSize.regular};
    color: #000;
    background: #f2f2f2;
    background: rgba(0, 0, 0, 0) !important;
    border: 0;
    border-radius: 0;
    outline: none;
    appearance: none;

    &:focus {
      z-index: 3;
      width: 100%;
      color: #394349;
    }

    option {
      cursor: pointer;
      padding-left: 1.5em;
      padding-right: 1.5em;
      background: #fff;
      border-radius: 0.5rem;
    }
  }
`;
