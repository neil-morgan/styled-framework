import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darken, lighten } from "polished";
import { Col, Row, Box } from "../components";

export default () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Row mb="2rem" justifyContent="space-between">
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.red)} height="2rem" />
          <Box bg="red" height="2rem" />
          <Box bg={darken(0.2, colors.red)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.pink)} height="2rem" />
          <Box bg="pink" height="2rem" />
          <Box bg={darken(0.2, colors.pink)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.purple)} height="2rem" />
          <Box bg="purple" height="2rem" />
          <Box bg={darken(0.2, colors.purple)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.violet)} height="2rem" />
          <Box bg="violet" height="2rem" />
          <Box bg={darken(0.2, colors.violet)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.indigo)} height="2rem" />
          <Box bg="indigo" height="2rem" />
          <Box bg={darken(0.2, colors.indigo)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.blue)} height="2rem" />
          <Box bg="blue" height="2rem" />
          <Box bg={darken(0.2, colors.blue)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.azure)} height="2rem" />
          <Box bg="azure" height="2rem" />
          <Box bg={darken(0.2, colors.azure)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.cyan)} height="2rem" />
          <Box bg="cyan" height="2rem" />
          <Box bg={darken(0.2, colors.cyan)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.teal)} height="2rem" />
          <Box bg="teal" height="2rem" />
          <Box bg={darken(0.2, colors.teal)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.green)} height="2rem" />
          <Box bg="green" height="2rem" />
          <Box bg={darken(0.2, colors.green)} height="2rem" />
        </Col>
      </Row>
      <Row justifyContent="space-between">
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.tea)} height="2rem" />
          <Box bg="tea" height="2rem" />
          <Box bg={darken(0.2, colors.tea)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.lime)} height="2rem" />
          <Box bg="lime" height="2rem" />
          <Box bg={darken(0.2, colors.lime)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.yellow)} height="2rem" />
          <Box bg="yellow" height="2rem" />
          <Box bg={darken(0.2, colors.yellow)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.amber)} height="2rem" />
          <Box bg="amber" height="2rem" />
          <Box bg={darken(0.2, colors.amber)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.orange)} height="2rem" />
          <Box bg="orange" height="2rem" />
          <Box bg={darken(0.2, colors.orange)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.carrot)} height="2rem" />
          <Box bg="carrot" height="2rem" />
          <Box bg={darken(0.2, colors.carrot)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.brown)} height="2rem" />
          <Box bg="brown" height="2rem" />
          <Box bg={darken(0.2, colors.brown)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.steel)} height="2rem" />
          <Box bg="steel" height="2rem" />
          <Box bg={darken(0.2, colors.steel)} height="2rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.grey)} height="2rem" />
          <Box bg="grey" height="2rem" />
          <Box bg={darken(0.2, colors.grey)} height="2rem" />
        </Col>
        <Col xs={1} bg="light" py={2} />
      </Row>
    </>
  );
};
