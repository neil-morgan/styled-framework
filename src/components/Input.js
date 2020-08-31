import React from "react";
import styled from "styled-components/macro";
import { Error } from "./";

export default ({ name, label, placeholder, register, errors }) => {
  return (
    <Field>
      <Label>{label}</Label>
      <Input type="text" name={name} placeholder={placeholder} ref={register} />
      {errors ? <Error error={errors.message} /> : undefined}
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
