import React from "react";
import { useForm } from "react-hook-form";
import { Select, Option, Input, RadioGroup } from "../components";

export default () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        name="title"
        label="Title"
        placeholder="Please select"
        register={register({
          required: true,
        })}
      >
        {["Mr", "Mrs", "Miss", "Dr"].map((state) => (
          <Option key={state} value={state}>
            {state}
          </Option>
        ))}
      </Select>
      <Input
        name="name"
        label="Name"
        placeholder="Name"
        register={register({
          required: true,
          maxLength: 80,
        })}
      />
      <Input
        name="surname"
        label="Surname"
        placeholder="Surname"
        register={register({
          required: true,
          maxLength: 80,
        })}
      />
      <Input
        name="email"
        label="Email"
        placeholder="example@email.com"
        register={register({
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <RadioGroup
        name="test"
        label="Radio"
        options={[
          ["A", "1"],
          ["B", "2"],
          ["C", "3"],
        ]}
        register={register({
          required: true,
        })}
      />

      <input type="submit" />
    </form>
  );
};
