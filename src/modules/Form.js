import React, { useState } from "react";
import styled from "styled-components/macro";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  Form,
  Select,
  Input,
  TextArea,
  Radio,
  Checkbox,
  Switch,
  Button,
  Ripple,
  Text,
  Error,
  FieldSet,
} from "../components";

const { Paragraph, Legend } = Text;

export default () => {
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [output, setOutput] = useState(null);

  const onSubmit = (data) => {
    setOutput(JSON.stringify(data));
  };

  return (
    <>
      <Form width="100%" mx="auto" onSubmit={handleSubmit(onSubmit)}>
        <FieldSet flexDirection="row">
          <Legend>Selects</Legend>
          <Paragraph flexBasis="100%">
            Tempor aliquip aliqua voluptate fugiat sit officia ad incididunt non
            culpa proident in Lorem officia.
          </Paragraph>
          <Select
            name="select1"
            label={"Select 1"}
            placeholder="Please select"
            options={[
              ["A", "1"],
              ["B", "2"],
              ["C", "3"],
            ]}
            register={register({
              required: "This is required",
            })}
          >
            <ErrorMessage
              as={Error}
              errors={errors}
              name="select1"
              message="This is required"
            />
          </Select>
          <Select
            name="select2"
            label={"Select 2"}
            placeholder="Please select"
            options={[
              ["A", "1"],
              ["B", "2"],
              ["C", "3"],
            ]}
            register={register({
              required: "This is required",
            })}
          >
            <ErrorMessage
              as={Error}
              errors={errors}
              name="select2"
              message="This is required"
            />
          </Select>
        </FieldSet>

        <FieldSet flexDirection="row">
          <Legend>Radios</Legend>
          <Radio
            name="radio"
            label={"Radio 1"}
            register={register({
              required: true,
            })}
          >
            <ErrorMessage
              as={Error}
              errors={errors}
              name="radio"
              message="This is required"
            />
          </Radio>
          <Radio
            name="radio"
            label={"Radio 2"}
            register={register({
              required: true,
            })}
          >
            <ErrorMessage
              as={Error}
              errors={errors}
              name="radio"
              message="This is required"
            />
          </Radio>
        </FieldSet>

        <FieldSet flexDirection="column">
          <Legend>Checkboxes</Legend>
          <Checkbox
            name="check1"
            label="Checkbox 1"
            register={register({
              required: true,
            })}
          >
            <ErrorMessage
              as={Error}
              errors={errors}
              name="check1"
              message="This is required"
            />
          </Checkbox>
          <Checkbox
            name="check2"
            label="Checkbox 2"
            register={register({
              required: true,
            })}
          >
            <ErrorMessage
              as={Error}
              errors={errors}
              name="check2"
              message="This is required"
            />
          </Checkbox>
        </FieldSet>

        <FieldSet flexDirection="row">
          <Legend>Switches</Legend>
          <Switch
            name="switch1"
            label="Switch 1"
            register={register({
              required: "This is required",
            })}
          >
            <ErrorMessage
              as={Error}
              errors={errors}
              name="switch1"
              message="This is required"
            />
          </Switch>
          <Switch
            name="switch2"
            label="Switch 2"
            register={register({
              required: "This is required",
            })}
          >
            <ErrorMessage
              as={Error}
              errors={errors}
              name="switch2"
              message="This is required"
            />
          </Switch>
        </FieldSet>

        <FieldSet marginBottom={0}>
          <Legend>Inputs</Legend>
          <Input
            name="input"
            label={"Input"}
            placeholder="Input"
            register={register({
              required: "This is required",
              maxLength: {
                value: 80,
                message: "Max length is 80",
              },
            })}
          >
            <ErrorMessage name="input" as={Error} errors={errors}>
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <React.Fragment key={type}>{message}</React.Fragment>
                ))
              }
            </ErrorMessage>
          </Input>
          <Input
            name="email"
            label="Email"
            placeholder="example@email.com"
            register={register({
              required: "This is required",
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email address",
              },
            })}
          >
            <ErrorMessage name="email" as={Error} errors={errors}>
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <React.Fragment key={type}>{message}</React.Fragment>
                ))
              }
            </ErrorMessage>
          </Input>
        </FieldSet>
        <FieldSet>
          <TextArea
            name="textarea"
            label={"Text Area"}
            placeholder="Text Area"
            register={register({
              required: "This is required",
              maxLength: {
                value: 80,
                message: "Max length is 80",
              },
            })}
            width="100%"
          >
            <ErrorMessage name="textarea" as={Error} errors={errors}>
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <React.Fragment key={type}>{message}</React.Fragment>
                ))
              }
            </ErrorMessage>
          </TextArea>
        </FieldSet>

        <Button secondary type="submit">
          Submit
          <Ripple />
        </Button>
      </Form>
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
