import React from "react";
import { Input } from "antd";

import "./field_input.css";

const FieldInput = ({ input, label, type }) => {
  return (
    <div className="label-wrapper">
      <label>{label}</label>
      <Input {...input} type={type} placeholder={label} />
    </div>
  );
};

export default FieldInput;
