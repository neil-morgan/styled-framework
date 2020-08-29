import React from "react";
import styled from "styled-components/macro";

const RadioGroup = ({ name, label, options, register }) => {
  return (
    <Field>
      <Label>{label}</Label>
      {options.map(([text, value], i) => (
        <label key={i}>
          <Radio type="radio" name={name} value={value} ref={register} />
          {text}
        </label>
      ))}
    </Field>
  );
};

const Field = styled.fieldset`
  display: flex;
  color: #fff;
`;

const Label = styled.label`
  color: #ffffff;
`;

const Radio = styled.input``;

export default RadioGroup;
