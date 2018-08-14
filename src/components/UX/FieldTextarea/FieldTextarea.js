import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const FieldInput = ({ input, label, type }) => {
  return (
    <div>
      <label>{label}</label>
      <TextArea
        {...input}
        type={type}
        placeholder={label}
        autosize={{ minRows: 2, maxRows: 6 }}
      />
    </div>
  );
};

export default FieldInput;
