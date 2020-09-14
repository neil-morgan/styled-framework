import styled from "styled-components/macro";

const Label = styled.label`
  display: inline-flex;
  ${({ theme }) => theme && theme.fontSize.regular}
  color:#fff;
  margin-bottom: 1rem;
`;

export default Label;
