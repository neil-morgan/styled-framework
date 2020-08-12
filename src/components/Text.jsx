import styled, { css } from "styled-components/macro";
import { color } from "styled-system";
import { transparentize } from "polished";

const Root = () => css`
  font-family: "Nunito";
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  ${color}
`;

const MainHeading = styled.h1`
  ${Root}
  ${({ theme }) => theme && theme.fontSize.mainHeading}
  font-family: "Roboto";
  margin-bottom: 0.5em;
`;

const Heading = styled.h2`
  ${Root}
  ${({ theme }) => theme && theme.fontSize.heading}
  font-family: "Roboto";
  margin-bottom: 0.5em;
`;

const SubHeading = styled.h3`
  ${Root}
  ${({ theme }) => theme && theme.fontSize.subHeading}
  font-family: "Roboto";
  margin-bottom: 0.75em;
`;

const Regular = () => css`
  ${({ theme }) => theme && theme.fontSize.regular}
`;

const Small = styled.small`
  ${Root}
  ${({ theme }) => theme && theme.fontSize.small}
  display: inline-flex;
`;

const Paragraph = styled.p`
  ${Root}
  ${Regular}
  margin-bottom: 1em;
`;

const List = styled.ul`
  ${Root}
  ${Regular}
  margin-left: 2rem;
  margin-bottom: 1em;
  & ol,
  & ul {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  ${Root}
  ${Regular}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.link};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const Item = styled.li`
  ${Root}
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Rule = styled.hr`
  ${Root}
  height: 1px;
  background: ${({ theme }) => transparentize(0.8, "#ffffff")};
  border: none;
  margin: 4em 0;
  height: 0.1rem;
`;

const Weak = styled.span`
  ${Root}
  font-weight:300 !important;
`;

const Semibold = styled.strong`
  ${Root}
  font-weight: 500 !important;
`;

const Strong = styled.strong`
  ${Root}
  font-weight: 600 !important;
`;

export default {
  MainHeading,
  Heading,
  SubHeading,
  Paragraph,
  Link,
  Weak,
  Semibold,
  Strong,
  Small,
  List,
  Item,
  Rule,
};
