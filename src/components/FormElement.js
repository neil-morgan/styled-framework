import React from "react";
import styled from "styled-components/macro";
import { Label } from "./";

export default ({ children, label, error }) => {
  return (
    <FormElement>
      {label && <Label>{label}</Label>}
      <Input>{children}</Input>
      {error}
    </FormElement>
  );
};

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 2rem;
  margin-bottom: 2rem;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  min-width: 12rem;
`;
