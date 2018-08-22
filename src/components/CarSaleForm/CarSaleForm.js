import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Button } from "antd";

import FieldInput from "../UX/FieldInput/FieldInput";
import FieldTextarea from "../UX/FieldTextarea/FieldTextarea";
import { addCar } from "../../actions/index";

import "./carsaleform.css";

class CarSaleForm extends Component {
  state = {
    loading: false,
    avatar: null,
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
      // console.log(reader);
      this.setState({
        image: reader.result
      });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  };

  handleUploadSuccess = filename => {
    let file = filename.target.files[0];
    this.getBase64(file);
    this.setState({
      file: file
    });
  };
  render() {
    const { handleSubmit } = this.props;
    console.log(this.state);
    return (
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
            <Field
              name="color"
              component={FieldInput}
              type="text"
              label="Цвет"
            />
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
            <Field
              name="price"
              component={FieldInput}
              type="text"
              label="Цена"
            />
          </div>
          <div className="label-wrapper">
            <Field
              name="phone"
              component={FieldInput}
              type="text"
              label="Телефон"
            />
          </div>
          <div className="form">
            <input
              accept=".jpg, .jpeg, .png"
              type="file"
              onChange={this.handleUploadSuccess}
            />
          </div>
          <div className="image">
            {this.state.image && <img src={this.state.image} alt="car" />}
          </div>
          <Button type="primary" htmlType="submit">
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
  reduxForm({ form: "carsale" })
)(CarSaleForm);
