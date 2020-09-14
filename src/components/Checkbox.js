import React from "react";
import styled from "styled-components";

export default ({ name, children, register }) => {
  return (
    <Checkbox>
      <input name={name} id={name} type="checkbox" ref={register} />
      <label htmlFor={name}>
        <svg viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </label>
      <label htmlFor={name}> {children}</label>
    </Checkbox>
  );
};

const Checkbox = styled.div`
  display: flex;
  margin-bottom: 2rem;
  margin-right: 2rem;
  color: #fff;
  align-items: center;
  ${({ theme }) => theme && theme.fontSize.regular}

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    fill: none;
    stroke: white;
    stroke-width: 0.4rem;

    polyline {
      opacity: 0;
      transform: scale(1.3);
      transform-origin: center;
      transition: 200ms;
    }
  }

  label {
    cursor: pointer;
    &:first-of-type {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      background: ${({ theme }) => theme.colors.grey};
      border-radius: 0.5rem;
      transition: 200ms;
      margin-right: 1rem;
    }
  }

  input {
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
      + label {
        background: ${({ theme }) => theme.colors.green};
        polyline {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
  }
`;
