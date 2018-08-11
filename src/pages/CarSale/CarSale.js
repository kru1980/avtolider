import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import { addCar } from "../../actions/index";

const CarSale = props => {
  const { handleSubmit, reset } = props;
  const onSubmit = car => {
    props.addCar(car);
    reset("carsale");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="producer">Производитель</label>
          <Field name="producer" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="model">Марка автомобиля</label>
          <Field name="model" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="year">Год</label>
          <Field name="year" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="color">Цвет</label>
          <Field name="color" component="input" type="text" />
        </div>
        <button type="submit">Отправить</button>
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
)(CarSale);
