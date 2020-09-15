import React from "react";
import styled from "styled-components/macro";

export default ({ children }) => {
  return <Error>{children}</Error>;
};

const Error = styled.div`
  ${({ theme }) => theme && theme.fontSize.small}
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 0 0 100%;
  min-width: 11rem;
  margin-top: 0.5rem;
  color: red;
  transition: 200ms;
`;
