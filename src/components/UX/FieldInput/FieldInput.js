import React from "react";
import { Input } from "antd";

const FieldInput = ({ input, label, type }) => {
  return (
    <div>
      <label>{label}</label>
      <Input {...input} type={type} placeholder={label} />
    </div>
  );
};

export default FieldInput;
