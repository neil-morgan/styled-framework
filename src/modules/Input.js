import React from "react";
import styled from "styled-components/macro";
import { space } from "styled-system";

export default (props) => {
  const { name, placeholder, register } = props;

  return (
    <Input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      ref={register}
      {...props}
    />
  );
};

const Input = styled.input`
  ${({ theme }) => theme && theme.fontSize.regular}
  background: ${({ theme }) => theme.colors.inputBackground};
  position: relative;
  width: 100%;
  border: 0;
  border-radius: 0.5rem;
  height: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  transition: 200ms;
  ${space}

  &::placeholder {
    opacity: 1;
  }

  &:focus {
    background: ${({ theme }) => theme.colors.inputFocus};
  }

  &:disabled {
    background-color: #f7f7f7;
  }
`;
