import React from "react";
import styled from "styled-components/macro";

const RadioGroup = ({ name, label, options, register }) => {
  return (
    <Field>
      <Label>{label}</Label>
      {options.map(([text, value], i) => (
        <React.Fragment key={i}>
          <Input name={name} type="radio" value={value} ref={register} />
          <Text>{text}</Text>
        </React.Fragment>
      ))}
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
  color: #fff;
`;

const Text = styled.label`
  color: #fff;
`;

export default RadioGroup;
