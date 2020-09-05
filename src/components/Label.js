import styled from "styled-components/macro";

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme && theme.fontSize.regular}
  color:#fff;
  margin-bottom: 1rem;
`;

export default Label;
