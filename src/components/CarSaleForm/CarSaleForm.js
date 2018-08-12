import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button, Input } from "antd";

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
          <label htmlFor="producer">Производитель</label>
          <Field name="producer" component={Input} type="text" />
        </div>
        <div className="label-wrapper">
          <label htmlFor="model">Марка автомобиля</label>
          <Field name="model" component={Input} type="text" />
        </div>
        <div className="label-wrapper">
          <label htmlFor="year">Год</label>
          <Field name="year" component={Input} type="text" />
        </div>
        <div className="label-wrapper">
          <label htmlFor="color">Цвет</label>
          <Field name="color" component={Input} type="text" />
        </div>
        <Button type="primary">Отправить</Button>
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
