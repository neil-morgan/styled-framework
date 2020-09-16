import React from "react";
import styled from "styled-components/macro";

export default ({ name, placeholder, options, register }) => {
  return (
    <DropDown>
      <Input name={name} defaultValue={""} ref={register}>
        {placeholder && <Option value="">{placeholder}</Option>}

        {options.map(([text, value], i) => (
          <Option key={i} value={value}>
            {text}
          </Option>
        ))}
      </Input>
    </DropDown>
  );
};

const DropDown = styled.div`
  background: ${({ theme }) => theme.colors.inputBackground};
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 4rem;
  border-radius: 0.5rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 1.5rem;
    right: 2rem;
    width: 0;
    height: 0;
    border: 0.4rem dashed;
    border-color: #000 transparent;
    pointer-events: none;
  }
  &::before {
    border-bottom-style: solid;
    border-top: none;
  }
  &::after {
    margin-top: 7px;
    border-top-style: solid;
    border-bottom: none;
  }
`;

const Input = styled.select`
  ${({ theme }) => theme && theme.fontSize.regular};
  cursor: pointer;
  display: flex;
  position: relative;
  width: 130%;
  height: 100%;
  margin: 0;
  padding-left: 2rem;
  padding-right: 5rem;
  color: #000;
  background: transparent;
  border: 0;
  border-radius: 0;
  outline: none;
  appearance: none;

  &:focus {
    z-index: 3;
    width: 100%;
    color: #394349;
  }
`;

const Option = styled.option`
  cursor: pointer;
  padding-left: 1.5em;
  padding-right: 1.5em;
  background: #fff;
  border-radius: 0.5rem;
`;
