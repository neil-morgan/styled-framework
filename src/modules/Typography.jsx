import React from "react";
import { Section, Container, Col, Text, Button, Ripple } from "../components";

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
  return (
    <Col xs={12}>
      <MainHeading mb={"0.25em"}>Typography</MainHeading>
      <Rule mt={0} width="25%" />
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
      <Button bg="indigo" alignSelf="flex-start" mb={0}>
        Button
        <Ripple />
      </Button>
    </Col>
  );
};
