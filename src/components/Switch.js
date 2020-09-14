import React from "react";
import styled from "styled-components/macro";

export default ({ name, children, register }) => {
  return (
    <Switch>
      <input name={name} id={name} type="checkbox" ref={register} />
      <label htmlFor={name}>
        <span />
      </label>
      <label htmlFor={name}>{children}</label>
    </Switch>
  );
};

const Switch = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme && theme.fontSize.regular}
  color: #fff;
  margin-bottom: 2rem;
  margin-right: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    cursor: pointer;
    &:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 4rem;
      height: 2rem;
      margin-right: 1rem;
      background: ${({ theme }) => theme.colors.grey};
      border-radius: 100px;
      position: relative;
      transition: background-color 200ms;
    }
  }

  span {
    content: "";
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    left: 0.4rem;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 5rem;
    transition: 0.2s;
    background: #fff;
  }

  input {
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + label {
      background: ${({ theme }) => theme.colors.green};
      span {
        left: calc(100% - 0.4rem);
        background: #fff;
        transform: translate(-100%, -50%);
      }
    }
  }
`;
