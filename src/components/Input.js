import React from "react";
import styled from "styled-components/macro";
import { Fieldset, Label, Error } from "./";

export default ({ name, label, placeholder, register, errors }) => {
  return (
    <Fieldset>
      <Label>{label}</Label>
      <Input type="text" name={name} placeholder={placeholder} ref={register} />
      {errors ? <Error error={errors.message} /> : undefined}
    </Fieldset>
  );
};

const Input = styled.input`
  width: 100%;
`;
