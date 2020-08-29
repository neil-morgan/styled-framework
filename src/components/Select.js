import React, { useState } from "react";
import styled from "styled-components/macro";

export default ({ name, label, placeholder, options, register }) => {
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
        {options.map(([text, value], i) => (
          <Option key={i} value={value}>
            {text}
          </Option>
        ))}
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

const Select = styled.select``;

const Option = styled.option`
  color: #000000;
`;
