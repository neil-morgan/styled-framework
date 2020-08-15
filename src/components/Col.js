import styled from "styled-components/macro";
import { color, space, flexbox } from "styled-system";
import getGridItem from "../system/get-grid-item";

const Col = styled.div`
  display: flex;
  flex: 0 0 auto; 
  flex-direction: column;
  position: relative;
  min-height: 1px;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  padding: 0 ${({ theme }) => theme.grid.gutter};

  ${(props) => getGridItem(props)}
  ${color}
  ${space}
  ${flexbox}
`;

export default Col;
