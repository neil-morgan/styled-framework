import React from "react";
import styled from "styled-components/macro";
import { FormElement } from "./";

export default ({ name, label, children, register }) => {
  return (
    <FormElement error={children}>
      <HiddenInput name={name} id={name} type="checkbox" ref={register} />
      <Switch htmlFor={name}>
        <Dot />
      </Switch>
      <SwitchLabel htmlFor={name}>{label}</SwitchLabel>
    </FormElement>
  );
};

const Switch = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  margin-right: 1rem;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 100px;
  position: relative;
  transition: background-color 200ms;
`;

const SwitchLabel = styled.label`
  cursor: pointer;
  color: #fff;
  ${({ theme }) => theme && theme.fontSize.regular}
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
  &:checked + ${Switch} {
    background: ${({ theme }) => theme.colors.green};
    ${Dot} {
      left: calc(100% - 0.4rem);
      background: #fff;
      transform: translate(-100%, -50%);
    }
  }
`;
