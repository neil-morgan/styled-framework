import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { darken, lighten } from "polished";
import { Col, Row, Box, Text } from "../components";
const { MainHeading, Small, Rule } = Text;

export default () => {
  const { colors } = useContext(ThemeContext);

  return (
    <>
      <Col>
        <MainHeading mb={"0.25em"}>Colors</MainHeading>
        <Rule mt={0} width="25%" />
      </Col>
      <Row mb="2rem" justifyContent="space-between" px={"1rem"}>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.red)} height="2.5rem" />
          <Box
            bg="red"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Red</Small>
          </Box>
          <Box bg={darken(0.2, colors.red)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.pink)} height="2.5rem" />
          <Box
            bg="pink"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Pink</Small>
          </Box>
          <Box bg={darken(0.2, colors.pink)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.purple)} height="2.5rem" />
          <Box
            bg="purple"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Purple</Small>
          </Box>
          <Box bg={darken(0.2, colors.purple)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.violet)} height="2.5rem" />
          <Box
            bg="violet"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Violet</Small>
          </Box>
          <Box bg={darken(0.2, colors.violet)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.indigo)} height="2.5rem" />
          <Box
            bg="indigo"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Indigo</Small>
          </Box>
          <Box bg={darken(0.2, colors.indigo)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.blue)} height="2.5rem" />
          <Box
            bg="blue"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Blue</Small>
          </Box>
          <Box bg={darken(0.2, colors.blue)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.azure)} height="2.5rem" />
          <Box
            bg="azure"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Azure</Small>
          </Box>
          <Box bg={darken(0.2, colors.azure)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.cyan)} height="2.5rem" />
          <Box
            bg="cyan"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Cyan</Small>
          </Box>
          <Box bg={darken(0.2, colors.cyan)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.teal)} height="2.5rem" />
          <Box
            bg="teal"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Teal</Small>
          </Box>
          <Box bg={darken(0.2, colors.teal)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.green)} height="2.5rem" />
          <Box
            bg="green"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Green</Small>
          </Box>
          <Box bg={darken(0.2, colors.green)} height="2.5rem" />
        </Col>
      </Row>
      <Row justifyContent="space-between" px={"1rem"}>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.tea)} height="2.5rem" />
          <Box
            bg="tea"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Tea</Small>
          </Box>
          <Box bg={darken(0.2, colors.tea)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.lime)} height="2.5rem" />
          <Box
            bg="lime"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small color="#000000" display={[null, "none", "none", "flex"]}>
              Lime
            </Small>
          </Box>
          <Box bg={darken(0.2, colors.lime)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.yellow)} height="2.5rem" />
          <Box
            bg="yellow"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small color="#000000" display={[null, "none", "none", "flex"]}>
              Yellow
            </Small>
          </Box>
          <Box bg={darken(0.2, colors.yellow)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.amber)} height="2.5rem" />
          <Box
            bg="amber"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small color="#000000" display={[null, "none", "none", "flex"]}>
              Amber
            </Small>
          </Box>
          <Box bg={darken(0.2, colors.amber)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.orange)} height="2.5rem" />
          <Box
            bg="orange"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Orange</Small>
          </Box>
          <Box bg={darken(0.2, colors.orange)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.carrot)} height="2.5rem" />
          <Box
            bg="carrot"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Carrot</Small>
          </Box>
          <Box bg={darken(0.2, colors.carrot)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.brown)} height="2.5rem" />
          <Box
            bg="brown"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Brown</Small>
          </Box>
          <Box bg={darken(0.2, colors.brown)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.steel)} height="2.5rem" />
          <Box
            bg="steel"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Steel</Small>
          </Box>
          <Box bg={darken(0.2, colors.steel)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.grey)} height="2.5rem" />
          <Box
            bg="grey"
            color="#000000"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small display={[null, "none", "none", "flex"]}>Grey</Small>
          </Box>
          <Box bg={darken(0.2, colors.grey)} height="2.5rem" />
        </Col>
        <Col xs={1} p={0}>
          <Box bg={lighten(0.2, colors.light)} height="2.5rem" />
          <Box
            bg="light"
            height="2.5rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Small color="#000000" display={[null, "none", "none", "flex"]}>
              Light
            </Small>
          </Box>
          <Box bg={darken(0.2, colors.light)} height="2.5rem" />
        </Col>
      </Row>
    </>
  );
};
