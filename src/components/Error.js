import React from "react";
import styled from "styled-components/macro";

export default ({ children }) => {
  return <Error>{children}</Error>;
};

const Error = styled.div`
  ${({ theme }) => theme && theme.fontSize.small}
  color:  ${({ theme }) => theme && theme.colors.error};
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-basis: 100%;
  margin-top: 0.5rem;

  transition: 200ms;
`;
