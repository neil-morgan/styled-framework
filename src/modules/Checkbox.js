import React from "react";
import styled from "styled-components/macro";

export default ({ name, register }) => {
  return (
    <Checkbox>
      <HiddenInput name={name} id={name} ref={register} type="checkbox" />
      <Input htmlFor={name}>
        <Graphic viewBox="0 0 24 24">
          <Tick points="20 6 9 17 4 12" />
        </Graphic>
      </Input>
    </Checkbox>
  );
};

const Checkbox = styled.div`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
`;

const Input = styled.label`
  background: ${({ theme }) => theme.colors.inputBackground};
  cursor: pointer;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  transition: 200ms;
  margin-right: 1rem;
`;

const Graphic = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 0.4rem;
`;

const Tick = styled.polyline`
  opacity: 0;
  transform: scale(0.5);
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
    + ${Input} {
      background: ${({ theme }) => theme.colors.primary};
      ${Tick} {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
