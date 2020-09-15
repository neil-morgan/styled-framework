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

const Input = styled.textarea`
  ${({ theme }) => theme && theme.fontSize.regular}
  position: relative;
  width: 100%;
  border: 0;
  border-radius: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  resize: none;

  &::placeholder {
    opacity: 1;
  }

  &:disabled {
    background-color: #f7f7f7;
  }
`;
