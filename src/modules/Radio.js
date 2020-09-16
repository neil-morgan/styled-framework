import React from "react";
import styled from "styled-components/macro";

export default ({ name, id, register }) => {
  return (
    <Radio>
      <HiddenInput name={name} id={id} ref={register} type="radio" />
      <Input htmlFor={id} />
    </Radio>
  );
};

const Radio = styled.div`
  position: relative;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 1rem;
`;

const Input = styled.label`
  background: ${({ theme }) => theme.colors.inputBackground};
  cursor: pointer;
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;

  &:before {
    box-shadow: inset 0 0 0 1rem ${({ theme }) => theme.colors.primary};
    content: "";
    height: 100%;
    width: 100%;
    background: #fff;
    border-radius: 100%;
    opacity: 0;
    transition: 200ms;
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

  &:checked {
    + ${Input}:before {
      box-shadow: inset 0 0 0 0.5rem ${({ theme }) => theme.colors.primary};
      opacity: 1;
    }
  }

  &:disabled {
    + ${Input}:before {
      opacity: 0;
    }
  }
`;
