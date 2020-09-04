import React, { useState } from "react";
import styled from "styled-components/macro";
import { useForm } from "react-hook-form";
import {
  Label,
  Select,
  Input,
  Radio,
  Switch,
  Button,
  Ripple,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          name="select"
          label="Select"
          placeholder="Please select"
          options={[
            ["A", "1"],
            ["B", "2"],
            ["C", "3"],
          ]}
          register={register({
            required: "this is required",
          })}
          errors={errors.select}
        />

        <Radio
          name="radio"
          label="Radio"
          options={[
            ["A", "1"],
            ["B", "2"],
            ["C", "3"],
          ]}
          register={register({
            required: "this is required",
          })}
          errors={errors.radio}
        />

        <Switch
          name="switch"
          label="Switch"
          register={register({
            required: "this is required",
          })}
          errors={errors.switch}
        />

        <Input
          name="input"
          label="Input"
          placeholder="Input"
          register={register({
            required: "this is required",
            maxLength: {
              value: 80,
              message: "Max length is 80",
            },
          })}
          errors={errors.input}
        />

        <Input
          name="email"
          label="Email"
          placeholder="example@email.com"
          register={register({
            required: "this is required",
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
          errors={errors.email}
        />

        <Button secondary type="submit">
          Submit
          <Ripple />
        </Button>
      </form>
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
