import styled from "styled-components/macro";

const Legend = styled.legend`
  ${({ theme }) => theme && theme.fontSize.subHeading}
  position:relative;
  color: #fff;
  margin-bottom: 2rem;
  border-bottom: solid 0.2rem rgba(255, 255, 255, 0.25);
`;

export default Legend;
