import styled from "styled-components/macro";
import { flexbox } from "styled-system";

const FieldSet = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 2rem;
  ${flexbox}
`;

export default FieldSet;
