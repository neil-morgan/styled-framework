import React from "react";
import styled from "styled-components/macro";
import { Text } from "./";

export default ({ error }) => {
  return <Error>{error}</Error>;
};

const Error = styled(Text.Small)`
  color: red;
`;
