import React from "react";
import styled, { keyframes, css } from "styled-components/macro";
import { Text } from "./";

const Message = ({ error }) => {
  return <Error>{error}</Error>;
};

const frames = keyframes`
  0% {
    opacity: 0;
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Error = styled(Text.Small)`
  color: red;
  animation: ${frames} 500ms forwards;
  margin-left: 2rem;
`;

const Highlight = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1rem;
  background: red;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  animation: ${frames} 500ms forwards;
`;

export default {
  Message,
  Highlight,
};
