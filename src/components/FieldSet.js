import styled from "styled-components/macro";
import { flexbox, space } from "styled-system";

const FieldSet = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 4rem;
  ${flexbox}
  ${space}
`;

export default FieldSet;
