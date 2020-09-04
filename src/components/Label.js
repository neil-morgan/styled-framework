import styled from "styled-components/macro";

const Label = styled.label`
  ${({ theme }) => theme && theme.fontSize.subHeading}
  color:#fff;
  margin-bottom: 1rem;
`;

export default Label;
