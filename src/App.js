import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darken } from "polished";
import Example from "./modules/Example";
import {
  Section,
  Container,
  Col,
  Row,
  Text,
  Button,
  Ripple,
  Box,
} from "./components";

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
    <Section>
      <Container>
        <Col xs={12}>
          <MainHeading>Lorem ipsum dolar sit amet</MainHeading>
          <Heading>Lorem ipsum dolar sit amet</Heading>
          <SubHeading>Lorem ipsum dolar sit amet</SubHeading>
          <Paragraph>
            <Strong>Lorem ipsum dolar sit amet</Strong>
            <br />
            <Semibold>Lorem ipsum dolar sit amet</Semibold>
            <br />
            Lorem ipsum dolar sit amet
            <br />
            <Weak>Lorem ipsum dolar sit amet</Weak>
            <br />
            <Small>Lorem ipsum dolar sit amet</Small>
          </Paragraph>
          <Paragraph>
            <Link>Link</Link>
          </Paragraph>
          <List>
            <Item>Lorem ipsum dolar sit amet</Item>
            <Item>Lorem ipsum dolar sit amet</Item>
            <List>
              <Item>Lorem ipsum dolar sit amet</Item>
              <Item>Lorem ipsum dolar sit amet</Item>
              <List as="ol">
                <Item>Lorem ipsum dolar sit amet</Item>
                <Item>Lorem ipsum dolar sit amet</Item>
              </List>
            </List>
          </List>
          <Rule />
          <Button bg="indigo" alignSelf="center" mt={0} mb={"2em"}>
            Button
            <Ripple />
          </Button>
        </Col>
        <Example />
      </Container>
    </Section>
  );
};
