import React from "react";
import { Input } from "antd";

import "./field_input.css";

const FieldInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="label-wrapper">
      <label>{label}</label>
      <Input {...input} type={type} placeholder={label} />
      {touched && (error && <span>{error}</span>)}
    </div>
  );
};

export default FieldInput;
