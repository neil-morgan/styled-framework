import styled, { css } from "styled-components/macro";
import { color, space, typography, flexbox, layout } from "styled-system";

const Root = () => css`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;

const MainHeading = styled.h1`
  ${({ theme }) => theme && theme.fontSize.mainHeading}
  font-family: "Roboto";
  margin-bottom: 0.5em;
  ${Root}
`;

const Heading = styled.h2`
  ${({ theme }) => theme && theme.fontSize.heading}
  font-family: "Roboto";
  margin-bottom: 0.5em;
  ${Root}
`;

const SubHeading = styled.h3`
  ${({ theme }) => theme && theme.fontSize.subHeading}
  font-family: "Roboto";
  margin-bottom: 0.75em;
  ${Root}
`;

const Regular = () => css`
  font-family: "Nunito";
  ${({ theme }) => theme && theme.fontSize.regular}
  ${Root}
`;

const Small = styled.small`
  ${({ theme }) => theme && theme.fontSize.small}
  display: inline-flex;
  ${Root}
`;

const Paragraph = styled.p`
  margin-bottom: 1em;
  ${Regular}
`;

const Span = styled.span`
  font-family: inherit;
  ${Root}
`;

const List = styled.ul`
  margin-left: 2rem;
  margin-bottom: 1em;
  & ol,
  & ul {
    margin-bottom: 0;
  }
  ${Root}
  ${Regular}
`;

const Link = styled.a`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.link};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
  ${Root}
  ${Regular}
`;

const Item = styled.li`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5em 0;
  &:last-child {
    margin-bottom: 0;
  }
  ${Root}
`;

const Rule = styled.hr`
  height: 1px;
  background: ${({ theme }) => theme.colors.text};
  border: none;
  margin-top: 4rem;
  margin-bottom: 4rem;
  height: 0.1rem;
  ${Root}
`;

const Weak = styled.span`
  font-weight: 300 !important;
  ${Root}
`;

const Semibold = styled.strong`
  font-weight: 500 !important;
  ${Root}
`;

const Strong = styled.strong`
  font-weight: 600 !important;
  ${Root}
`;

export default {
  MainHeading,
  Heading,
  SubHeading,
  Paragraph,
  Span,
  Link,
  Weak,
  Semibold,
  Strong,
  Small,
  List,
  Item,
  Rule,
};
