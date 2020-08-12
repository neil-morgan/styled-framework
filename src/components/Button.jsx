import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components/macro";
import { color, space, flexbox } from "styled-system";
import { darken, lighten } from "polished";

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding: 2em;
  margin: 1.5em 0;
  border-radius: 0.5rem;
  overflow: hidden;
  color: #fff;
  padding: 1rem 3rem 0.9rem;
  letter-spacing: 0.1rem;
  line-height: 1;
  font-weight: normal;
  text-align: center;
  border: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.05);
  transition: all 150ms ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    transition: all 150ms ease-in-out;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  ${color}
  ${flexbox}
  ${space}

  ${({ theme }) => theme.fontSize.regular}

  ${(props) =>
    props.primary &&
    css`
      background: linear-gradient(
        to top right,
        ${({ theme }) => lighten(0.1, theme.colors.primary)} 0%,
        ${({ theme }) => theme.colors.primary} 10%,
        ${({ theme }) => darken(0.2, theme.colors.primary)} 100%
      );
    `}

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(
        to top right,
        ${({ theme }) => lighten(0.15, theme.colors.secondary)} 0%,
        ${({ theme }) => theme.colors.secondary} 10%,
        ${({ theme }) => darken(0.35, theme.colors.secondary)} 100%
      );
    `}

  ${(props) =>
    props.tertiary &&
    css`
      background: linear-gradient(
        to top right,
        ${({ theme }) => lighten(0.15, theme.colors.tertiary)} 0%,
        ${({ theme }) => theme.colors.tertiary} 10%,
        ${({ theme }) => darken(0.25, theme.colors.tertiary)} 100%
      );
    `}

 
`;

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
};

export default Button;
