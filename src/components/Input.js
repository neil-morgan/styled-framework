import React from "react";
import styled from "styled-components/macro";
import { Fieldset, Label, Error } from "./";

export default ({ name, label, placeholder, register, errors }) => {
  return (
    <Fieldset>
      {label && (
        <Label>
          {label} {errors && <Error.Message error={errors.message} />}
        </Label>
      )}
      <Input>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          ref={register}
        />
        {errors && <Error.Highlight />}
      </Input>
    </Fieldset>
  );
};

const Input = styled.div`
  position: relative;
  overflow: hidden;
  input {
    position: relative;
    width: 100%;
    height: 4rem;
    border: 0;
    border-radius: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    ${({ theme }) => theme && theme.fontSize.regular}

    &:focus {
    }

    &::placeholder {
      opacity: 1;
    }

    &:disabled {
      background-color: #f7f7f7;
    }
  }
`;
