import React from "react";
import styled from "styled-components/macro";

export default ({ name, children, placeholder, register }) => {
  return (
    <Input>
      <label htmlFor={name}>{children}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        ref={register}
      />
    </Input>
  );
};

const Input = styled.div`
  position: relative;
  overflow: hidden;
  margin-right: 2rem;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    margin-bottom: 1rem;
    ${({ theme }) => theme && theme.fontSize.regular}
  }

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
