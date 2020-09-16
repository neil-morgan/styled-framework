import React from "react";
import styled from "styled-components/macro";

export default ({ name, register }) => {
  return (
    <Switch>
      <HiddenInput name={name} id={name} ref={register} type="checkbox" />
      <Input htmlFor={name} />
    </Switch>
  );
};

const Switch = styled.div`
  position: relative;
  height: 2rem;
  width: 4rem;
  border-radius: 10rem;
  overflow: hidden;
  margin-right: 1rem;
`;
const Input = styled.label`
  background: ${({ theme }) => theme.colors.inputBackground};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  width: 100%;
  margin-right: 1rem;
  border-radius: 100px;
  position: relative;
  transition: background-color 200ms;

  &:before {
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
`;

const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;
  &:checked + ${Input} {
    background: ${({ theme }) => theme.colors.primary};
    &:before {
      left: calc(100% - 0.4rem);
      background: #fff;
      transform: translate(-100%, -50%);
    }
  }
`;
