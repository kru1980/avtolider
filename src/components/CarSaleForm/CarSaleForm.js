import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button } from "antd";

import FieldInput from "../UX/FieldInput/FieldInput";
import FieldTextarea from "../UX/FieldTextarea/FieldTextarea";
import { addCar } from "../../actions/index";

import "./carsaleform.css";

const CarSaleForm = props => {
  const { handleSubmit, reset } = props;
  const onSubmit = car => {
    props.addCar(car);
    reset("carsale");
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="label-wrapper">
          <Field
            name="producer"
            component={FieldInput}
            type="text"
            label="Производитель"
          />
        </div>
        <div className="label-wrapper">
          <Field
            name="model"
            component={FieldInput}
            type="text"
            label="Марка автомобиля"
          />
        </div>
        <div className="label-wrapper">
          <Field name="year" component={FieldInput} type="text" label="Год" />
        </div>
        <div className="label-wrapper">
          <Field name="color" component={FieldInput} type="text" label="Цвет" />
        </div>
        <div className="label-wrapper">
          <Field
            name="description"
            component={FieldTextarea}
            type="text"
            label="Описание"
          />
        </div>
        <div className="label-wrapper">
          <Field name="price" component={FieldInput} type="text" label="Цена" />
        </div>
        <div className="label-wrapper">
          <Field
            name="phone"
            component={FieldInput}
            type="text"
            label="Телефон"
          />
        </div>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default compose(
  connect(
    null,
    { addCar }
  ),
  reduxForm({ form: "carsale" })
)(CarSaleForm);
