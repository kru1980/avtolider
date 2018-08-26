import React from "react";
import { Input } from "antd";

import "./field_textarea.css";

const { TextArea } = Input;

const FieldInput = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="label-wrapper">
      <label>{label}</label>
      <TextArea
        {...input}
        type={type}
        placeholder={label}
        autosize={{ minRows: "2", maxRows: "6" }}
      />
      {touched && (error && <span>{error}</span>)}
    </div>
  );
};

export default FieldInput;
