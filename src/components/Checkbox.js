import React from "react";
import styled from "styled-components";
import { FormElement } from "./";

export default ({ name, label, children, register }) => {
  return (
    <FormElement error={children}>
      <HiddenInput name={name} id={name} type="checkbox" ref={register} />
      <Checkbox htmlFor={name}>
        <Graphic viewBox="0 0 24 24">
          <Tick points="20 6 9 17 4 12" />
        </Graphic>
      </Checkbox>
      <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>
    </FormElement>
  );
};

const Checkbox = styled.label`
  background: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  transition: 200ms;
  margin-right: 1rem;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  color: #fff;
  ${({ theme }) => theme && theme.fontSize.regular}
`;

const Graphic = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 0.4rem;
`;

const Tick = styled.polyline`
  opacity: 0;
  transform: scale(1.3);
  transform-origin: center;
  transition: 200ms;
`;

const HiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &:checked {
    + ${Checkbox} {
      background: ${({ theme }) => theme.colors.green};
      ${Tick} {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
