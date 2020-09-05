import React from "react";
import styled from "styled-components/macro";

import { Fieldset, Label, Error } from "./";

export default ({ name, label, register, errors }) => {
  return (
    <Fieldset>
      {label && (
        <Label>
          {label} {errors && <Error.Message error={errors.message} />}
        </Label>
      )}
      <Switch>
        <input name={name} id={name} type="checkbox" ref={register} />
        <label htmlFor={name}>
          <span />
        </label>
      </Switch>
    </Fieldset>
  );
};

const Switch = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${(errors) => console.log(errors)}
    width: 4rem;
    height: 2rem;
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  span {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    left: 0.4rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 5rem;
    transition: 0.2s;
    background: #fff;
  }

  input {
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + label {
      background: ${({ theme }) => theme.colors.green};
      span {
        left: calc(100% - 0.4rem);
        background: #fff;
        transform: translate(-100%, -50%);
      }
    }
  }
`;
