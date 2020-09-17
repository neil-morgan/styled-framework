import React, { useState } from "react";
import styled from "styled-components/macro";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Form, Button, Ripple, Text, Error, Col, Row } from "../components";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Label from "./Label";
import Switch from "./Switch";
import FormElement from "./FormElement";
import FormGroup from "./FormGroup";
import Select from "./Select";
import Dropdown from "./TestSelect";

const { MainHeading, SubHeading } = Text;

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
];

export default () => {
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [output, setOutput] = useState(null);

  console.log(errors);
  const onSubmit = (data) => {
    setOutput(JSON.stringify(data));
  };

  return (
    <>
      <Col xs={12} md={10} lg={8} p={0}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Col>
            <MainHeading>Form elements</MainHeading>
            <FormGroup>
              <SubHeading>Inputs</SubHeading>
              <FormElement>
                <Label htmlFor="input" mb="1rem">
                  Name
                </Label>
                <Input
                  name="input"
                  placeholder="John Doe"
                  register={register({
                    required: "This is required",
                    maxLength: {
                      value: 80,
                      message: "Max length is 80",
                    },
                  })}
                />
                <ErrorMessage name="input" as={Error} errors={errors}>
                  {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <React.Fragment key={type}>{message}</React.Fragment>
                    ))
                  }
                </ErrorMessage>
              </FormElement>
              <FormElement>
                <Label htmlFor="input" margin="2rem 0 1rem">
                  Email
                </Label>
                <Input
                  name="email"
                  placeholder="example@email.com"
                  register={register({
                    required: "This is required",
                    pattern: {
                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <ErrorMessage name="email" as={Error} errors={errors}>
                  {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <React.Fragment key={type}>{message}</React.Fragment>
                    ))
                  }
                </ErrorMessage>
              </FormElement>
            </FormGroup>
          </Col>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <SubHeading>Radio buttons</SubHeading>
                <FormElement mb="1rem">
                  <Radio
                    name="radio"
                    id="radio1"
                    register={register({
                      required: true,
                    })}
                  />
                  <Label htmlFor="radio1">Radio 1</Label>
                </FormElement>
                <FormElement>
                  <Radio
                    name="radio"
                    id="radio2"
                    register={register({
                      required: true,
                    })}
                  />
                  <Label htmlFor="radio2">Radio 2</Label>
                  <ErrorMessage
                    as={Error}
                    errors={errors}
                    name="radio"
                    message="This is required"
                  />
                </FormElement>
              </FormGroup>

              <FormGroup>
                <SubHeading>Checkboxes</SubHeading>
                <FormElement mb="1rem">
                  <Checkbox
                    name="cb1"
                    register={register({
                      required: true,
                    })}
                  />
                  <Label htmlFor="cb1">Checkbox 1</Label>
                  <ErrorMessage
                    as={Error}
                    errors={errors}
                    name="cb1"
                    message="This is required"
                  />
                </FormElement>
                <FormElement>
                  <Checkbox
                    name="cb2"
                    register={register({
                      required: true,
                    })}
                  />
                  <Label htmlFor="cb2">Checkbox 2</Label>
                  <ErrorMessage
                    as={Error}
                    errors={errors}
                    name="cb2"
                    message="This is required"
                  />
                </FormElement>
              </FormGroup>
            </Col>

            <Col xs={12} md={6}>
              <FormGroup>
                <SubHeading>Switches</SubHeading>
                <FormElement mb="1rem">
                  <Switch
                    name="s1"
                    register={register({
                      required: true,
                    })}
                  />
                  <Label htmlFor="s1">Switch 1</Label>
                  <ErrorMessage
                    as={Error}
                    errors={errors}
                    name="s1"
                    message="This is required"
                  />
                </FormElement>
                <FormElement>
                  <Switch
                    name="s2"
                    register={register({
                      required: true,
                    })}
                  />
                  <Label htmlFor="s2">Switch 2</Label>
                  <ErrorMessage
                    as={Error}
                    errors={errors}
                    name="s2"
                    message="This is required"
                  />
                </FormElement>
              </FormGroup>

              <FormGroup>
                <SubHeading>Select</SubHeading>
                <FormElement>
                  <Label mb="1rem">Favourite movies</Label>
                  <Dropdown
                    name="dd"
                    placeholder="Options"
                    items={items}
                    register={register({
                      required: true,
                    })}
                    multiSelect
                  />
                </FormElement>
              </FormGroup>
            </Col>
          </Row>
          <Col>
            <Button secondary alignSelf="center" type="submit">
              Submit
              <Ripple />
            </Button>
          </Col>
        </Form>
      </Col>
      <Json>
        SUBMIT RESULT:
        <pre>
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      </Json>
    </>
  );
};

const Json = styled.div`
  margin-top: 3rem;
  ${({ theme }) => theme && theme.fontSize.small}
  color:#fff;
  pre {
    background: #fff;
    color: #000;
    code {
      font-family: consolas;
    }
  }
`;
