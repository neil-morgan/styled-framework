import styled from "styled-components/macro";
import { space } from "styled-system";

const Label = styled.label`
  ${({ theme }) => theme && theme.fontSize.regular}
  display: inline-flex;
  ${space}

  &[for] {
    cursor: pointer;
  }
`;

export default Label;
