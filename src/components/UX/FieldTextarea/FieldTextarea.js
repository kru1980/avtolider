import React from "react";
import { Input, Form } from "antd";

import "./field_textarea.css";

const { TextArea } = Input;
const FormItem = Form.Item;

const FieldInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <FormItem
      label={label}
      validateStatus={touched && error ? "error" : "success"}
      help={touched && error ? error : ""}
    >
      <TextArea
        {...input}
        type={type}
        placeholder={label}
        autosize={{ minRows: "2", maxRows: "6" }}
      />
    </FormItem>
  );
};

export default FieldInput;
