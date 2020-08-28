import styled from "styled-components/macro";
import { flexbox, space, layout } from "styled-system";

const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  ${space}
  ${flexbox}
  ${layout}
`;

Row.displayName = "Row";

export default Row;
