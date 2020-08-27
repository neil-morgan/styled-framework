import React from "react";
import styled from "styled-components/macro";

export default ({ name, label, placeholder, register }) => {
  return (
    <Field>
      <Label>{label}</Label>
      <Input type="text" name={name} placeholder={placeholder} ref={register} />
    </Field>
  );
};
const Field = styled.fieldset`
  display: flex;
`;
const Label = styled.label`
  color: #fff;
`;
const Input = styled.input`
  width: 100%;
`;
