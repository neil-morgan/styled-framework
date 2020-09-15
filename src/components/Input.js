import React from "react";
import styled from "styled-components/macro";
import { FormElement } from "./";

export default ({ name, label, children, placeholder, register }) => {
  return (
    <FormElement label={label} error={children}>
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        ref={register}
      />
    </FormElement>
  );
};

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 4rem;
  border: 0;
  border-radius: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  ${({ theme }) => theme && theme.fontSize.regular}

  &:focus {
  }

  &::placeholder {
    opacity: 1;
  }

  &:disabled {
    background-color: #f7f7f7;
  }
`;
