import React from "react";
import styled from "styled-components/macro";

import { Fieldset, Label, Error } from "./";

export default ({ name, label, register, errors }) => {
  return (
    <Fieldset>
      <Switch>
        <Label>{label}</Label>
        <HiddenInput name={name} id={name} type="checkbox" ref={register} />
        <Pill htmlFor={name}>
          <Dot />
        </Pill>
      </Switch>
      {errors ? <Error error={errors.message} /> : undefined}
    </Fieldset>
  );
};

const Switch = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pill = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

const Dot = styled.span`
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
`;

const HiddenInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${Pill} {
    background: ${({ theme }) => theme.colors.green};
    ${Dot} {
      left: calc(100% - 0.4rem);
      background: #fff;
      transform: translate(-100%, -50%);
    }
  }
`;
