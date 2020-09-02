import React from "react";
import styled from "styled-components/macro";
import { darken } from "polished";
import { Text, Error } from "./";

const { Label } = Text;

export default ({ name, label, register, errors }) => {
  return (
    <Fieldset>
      <Label>{label}</Label>
      <HiddenInput name={name} id={name} type="checkbox" ref={register} />
      <Switch htmlFor={name}>
        <Dot />
      </Switch>
      {errors ? <Error error={errors.message} /> : undefined}
    </Fieldset>
  );
};

const Fieldset = styled.fieldset`
  display: flex;
`;

const Switch = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  background: #fff;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

const Dot = styled.span`
  content: "";
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  left: 0.2rem;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 5rem;
  transition: 0.2s;
  background: ${({ theme }) => theme.colors.primary};
`;

const HiddenInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${Switch} {
    ${Dot} {
      left: calc(100% - 0.2rem);
      background: ${({ theme }) => theme.colors.primary};
      transform: translate(-100%, -50%);
    }
  }
`;
