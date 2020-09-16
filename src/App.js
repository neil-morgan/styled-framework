import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darken, lighten } from "polished";

import {
  Section,
  Container,
  Col,
  Row,
  Text,
  Button,
  Ripple,
} from "./components";

import Form from "./modules/Form";
import Test from "./modules/Test";

const {
  MainHeading,
  Heading,
  SubHeading,
  Paragraph,
  List,
  Item,
  Small,
  Strong,
  Semibold,
  Weak,
  Link,
  Rule,
} = Text;

export default () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Section>
        <Container>
          <Col xs={12} md={6}>
            <MainHeading>Main Heading</MainHeading>
            <Heading>Heading</Heading>
            <SubHeading>Subheading</SubHeading>
            <Paragraph>
              <Strong>Strong</Strong>
              <br />
              <Semibold>Semibold</Semibold>
              <br />
              Regular
              <br />
              <Weak>Weak</Weak>
              <br />
              <Small>Small</Small>
            </Paragraph>
            <Paragraph>
              <Link>Link</Link>
            </Paragraph>
            <List>
              <Item>List Item</Item>
              <Item>List Item</Item>
              <List>
                <Item>List Item</Item>
                <Item>List Item</Item>
                <List as="ol">
                  <Item>List Item</Item>
                  <Item>List Item</Item>
                </List>
              </List>
            </List>
            <Rule width="100%" />
            <Row>
              <Button bg={lighten(0.1, colors.primary)} mb={0}>
                Lighter
                <Ripple />
              </Button>
              <Button bg={colors.primary} mb={0} mx={"1em"}>
                Normal
                <Ripple />
              </Button>
              <Button bg={darken(0.1, colors.primary)} mb={0}>
                Darker
                <Ripple />
              </Button>
            </Row>
          </Col>
        </Container>
      </Section>

      <Section>
        <Container>
          <Test />
        </Container>
      </Section>
    </>
  );
};
