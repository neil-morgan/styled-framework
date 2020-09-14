import React, { useState } from "react";
import styled from "styled-components/macro";
import { useForm } from "react-hook-form";
import {
  Form,
  Select,
  Input,
  Radio,
  Checkbox,
  Switch,
  Button,
  Ripple,
  Legend,
  Label,
  FieldGroup,
  FieldSet,
} from "../components";

export default () => {
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const [output, setOutput] = useState(null);

  const onSubmit = (data) => {
    setOutput(JSON.stringify(data));
  };

  return (
    <>
      <Form width="100%" mx="auto" onSubmit={handleSubmit(onSubmit)}>
        <Legend>Selects</Legend>
        <FieldSet flexDirection="row">
          <Select
            name="select"
            placeholder="Please select"
            options={[
              ["A", "1"],
              ["B", "2"],
              ["C", "3"],
            ]}
            register={register({
              required: "This is required",
            })}
            errors={errors.select}
          >
            Select 1
          </Select>
          <Select
            name="select"
            placeholder="Please select"
            options={[
              ["A", "1"],
              ["B", "2"],
              ["C", "3"],
            ]}
            register={register({
              required: "This is required",
            })}
            errors={errors.select}
          >
            Select 2
          </Select>
        </FieldSet>
        <Legend>Radios</Legend>
        <FieldSet flexDirection="column">
          <Radio
            name="radio"
            register={register({
              required: "This is required",
            })}
            errors={errors.radio}
          >
            Radio 1
          </Radio>
          <Radio
            name="radio"
            register={register({
              required: "This is required",
            })}
            errors={errors.radio}
          >
            Radio 2
          </Radio>
        </FieldSet>
        <Legend>Checkboxes</Legend>
        <FieldSet flexDirection="column">
          <Checkbox
            name="check1"
            register={register({
              required: "This is required",
            })}
            errors={errors.check}
          >
            Checkbox 1
          </Checkbox>
          <Checkbox
            name="check2"
            register={register({
              required: "This is required",
            })}
            errors={errors.check}
          >
            Checkbox 2
          </Checkbox>
        </FieldSet>
        <Legend>Switches</Legend>
        <FieldSet flexDirection="column">
          <Switch
            name="switch1"
            register={register({
              required: "This is required",
            })}
            errors={errors.switch2}
          >
            Switch 1
          </Switch>
          <Switch
            name="switch2"
            register={register({
              required: "This is required",
            })}
            errors={errors.switch2}
          >
            Switch 2
          </Switch>
        </FieldSet>
        <FieldSet>
          <Input
            name="input"
            placeholder="Input"
            register={register({
              required: "This is required",
              maxLength: {
                value: 80,
                message: "Max length is 80",
              },
            })}
            errors={errors.input}
          >
            Input
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
            errors={errors.email}
          >
            Email
          </Input>
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
