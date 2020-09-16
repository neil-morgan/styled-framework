import styled from "styled-components/macro";
import { flexbox, space } from "styled-system";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  ${flexbox}
  ${space}
`;

export default FormGroup;
