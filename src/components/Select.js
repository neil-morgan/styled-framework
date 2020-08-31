import React from "react";
import styled from "styled-components/macro";
import { Error } from "./";

export default ({ name, label, placeholder, options, register, errors }) => {
  return (
    <Field>
      <Label>{label}</Label>
      <Select name={name} defaultValue={""} ref={register}>
        {placeholder && (
          <Option value="" disabled>
            {placeholder}
          </Option>
        )}
        {options.map(([text, value], i) => (
          <Option key={i} value={value}>
            {text}
          </Option>
        ))}
      </Select>
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

const Select = styled.select``;

const Option = styled.option`
  color: #000000;
`;
