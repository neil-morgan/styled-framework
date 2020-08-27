import React from "react";

import Constants from "./constants.js";
import {
  Form,
  Input,
  CheckBox,
  TextArea,
  Select,
  Option,
  ValidationTypes,
} from "../foo";

function submit(data) {
  console.log(data);
}

export default () => {
  return (
    <Form onSubmit={submit}>
      <Input
        name="def"
        label="Default"
        placeholder="Default"
        missingMessage="This field is required."
        isRequired
      />
      <Input
        name="num"
        label="Number"
        placeholder="Number"
        validation={ValidationTypes.NUMBER}
        missingMessage="MUST BE NUMBER"
        isRequired
      />

      <Input
        name="txt"
        label="Text"
        placeholder="Text"
        validation={ValidationTypes.TEXT}
        errorMessage="MUST BE TEXT"
        isRequired
      />

      <Select name="state" label="State" placeholder="Please select" isRequired>
        {Constants.stateAbbreviations.map((state) => (
          <Option key={state} value={state}>
            {state}
          </Option>
        ))}
      </Select>

      <Input
        name="zip"
        label="Zip Code"
        shouldPreventInvalid={true}
        validation={ValidationTypes.NUMBER}
        isRequired
      />

      <TextArea name="message" label="Message (Optional)" />
      <CheckBox
        name="terms"
        label="Accept Terms of Use"
        missingMessage="You must accept the terms."
        isRequired
      />
    </Form>
  );
};
