import React from "react";
import { Col, Input, Select, Text } from "../components";
import styled from "styled-components";

const { MainHeading, Rule, Paragraph } = Text;

export default () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    text: "",
    number: "",
    select: "",
  });

  return (
    <>
      <Col xs={12}>
        <MainHeading mb={"0.25em"}>Forms</MainHeading>
        <Rule mt={0} width="25%" />
        <Paragraph>Work in progress</Paragraph>
      </Col>
      <Col md={12} lg={6} mx="auto">
        <Input
          label="Email"
          type="email"
          value={state.email}
          onChange={(val) => setState({ ...state, email: val })}
        />
        <Input
          label="Password"
          type="password"
          value={state.password}
          onChange={(val) => setState({ ...state, password: val })}
        />
        <Input
          label="Text"
          type="text"
          value={state.text}
          onChange={(val) => setState({ ...state, text: val })}
        />
        <Input
          label="Number"
          type="number"
          value={state.number}
          onChange={(val) => setState({ ...state, number: val })}
        />
        <Select
          label="Select"
          type="select"
          value={state.select}
          onChange={(val) => setState({ ...state, select: val })}
        >
          <option value="" disabled selected>
            Please select:
          </option>
          <option value="Foo">Foo</option>
          <option value="Bar">Bar</option>
          <option value="Baz">Baz</option>
        </Select>

        <Json>
          FORM STATE:
          <pre>
            <code>{JSON.stringify(state, null, 2)}</code>
          </pre>
        </Json>
      </Col>
    </>
  );
};

const Json = styled.div`
  background: #fff;
  border-radius: 0.25rem;
  padding: 20px;
  margin-top: 3rem;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
