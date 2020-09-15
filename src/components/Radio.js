import React from "react";
import styled from "styled-components/macro";
import { FormElement } from "./";
import Util from "../system/util";

const { makeid } = Util();

export default ({ name, label, register, children }) => {
  const key = makeid(5);

  return (
    <FormElement error={children}>
      <HiddenInput name={name} id={key} ref={register} type="radio" />
      <Radio htmlFor={key}>{label}</Radio>
    </FormElement>
  );
};

const Radio = styled.label`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  ${({ theme }) => theme && theme.fontSize.regular}
  &:before {
    content: "";
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 100%;
    border: 1px solid darken(${({ theme }) => theme.colors.grey}, 25%);
    display: inline-block;
    width: 2rem;
    height: 2rem;
    position: relative;
    top: 0;
    margin-right: 1rem;
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: 200ms;
  }
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
    + ${Radio} {
      &:before {
        background-color: #fff;
        box-shadow: inset 0 0 0 0.4rem ${({ theme }) => theme.colors.green};
      }
    }
  }
  &:focus {
    + ${Radio} {
      &:before {
        outline: none;
        border-color: #fff;
      }
    }
  }
  &:disabled {
    + ${Radio} {
      &:before {
        box-shadow: inset 0 0 0 4px #f4f4f4;
        border-color: darken(#f4f4f4, 25%);
        background: darken(#f4f4f4, 25%);
      }
    }
  }
  + ${Radio} {
    &:empty {
      &:before {
        margin-right: 0;
      }
    }
  }
`;
