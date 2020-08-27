import React, { useState } from "react";
import styled from "styled-components/macro";
import Option from "./Option";

export default ({ name, label, placeholder, register, children }) => {
  const [selectedOption, setSelectedOption] = useState(placeholder);

  return (
    <Field>
      <Label>{label}</Label>
      <Select
        name={name}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        ref={register}
      >
        {placeholder && <Option disabled>{placeholder}</Option>}
        {children}
      </Select>
    </Field>
  );
};

const Field = styled.fieldset`
  display: flex;
`;
const Label = styled.label`
  color: #fff;
`;

const Select = styled.select`
  background: #ffffff;
  border: none;
  ${({ theme }) => theme && theme.fontSize.regular}
  height: 4rem;
  padding: 0.5rem;
`;
