import styled from "styled-components/macro";

const Legend = styled.legend`
  ${({ theme }) => theme && theme.fontSize.subHeading}
  position:relative;
  color: #fff;
  margin-bottom: 2rem;
  border-bottom: solid 0.2rem #fff;
`;

export default Legend;
