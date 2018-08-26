import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button } from "antd";

import FieldInput from "../UX/FieldInput/FieldInput";
import FieldTextarea from "../UX/FieldTextarea/FieldTextarea";
import UploadImage from "../UploadImage/UploadImage";
import { addCar } from "../../actions/index";

import "./car_sale_form.css";

const validate = values => {
  const errMessage = {
    producer: "Добавьте производителя",
    model: "Добавьте модель",
    year: "Добавьте год",
    color: "Добавьте цвет",
    description: "Добавить описание",
    price: "Добавить цену",
    phone: "Добавить телефон",
    files: "добавьте изображение"
  };
  const errors = {};
  for (let key in errMessage) {
    if (!values[key]) {
      errors[key] = errMessage[key];
    }
  }
  return errors;
};

class CarSaleForm extends Component {
  state = {
    image: null,
    file: null
  };
  onSubmit = car => {
    this.props.addCar(car, this.state.file);
    this.props.reset("carsale");
  };

  getBase64 = file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        image: reader.result
      });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  };

  handleUploadSuccess = filename => {
    let file = filename[0];
    this.getBase64(file);
    this.setState({
      file: file
    });
  };

  render() {
    const { handleSubmit, submitting, pristine, invalid } = this.props;
    return (
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="producer"
            component={FieldInput}
            type="text"
            label="Производитель"
          />
          <Field
            name="model"
            component={FieldInput}
            type="text"
            label="Марка автомобиля"
          />
          <Field name="year" component={FieldInput} type="text" label="Год" />
          <Field name="color" component={FieldInput} type="text" label="Цвет" />
          <Field
            name="description"
            component={FieldTextarea}
            type="text"
            label="Описание"
          />
          <Field name="price" component={FieldInput} type="text" label="Цена" />
          <Field
            name="phone"
            component={FieldInput}
            type="text"
            label="Телефон"
          />
          <Field
            name="files"
            component={UploadImage}
            multiple={false}
            dropzoneOnDrop={this.handleUploadSuccess}
            image={this.state.image}
          />
          <Button
            disabled={invalid || pristine || submitting}
            className="btn-submit"
            type="primary"
            htmlType="submit"
          >
            Отправить
          </Button>
        </form>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    { addCar }
  ),
  reduxForm({ form: "carsale", validate })
)(CarSaleForm);
