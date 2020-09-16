import styled from "styled-components/macro";
import { flexbox, space } from "styled-system";

const FormElement = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${flexbox}
  ${space}

  &:last-child {
    margin-right: 0;
  }
`;

export default FormElement;
