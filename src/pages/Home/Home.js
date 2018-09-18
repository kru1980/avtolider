import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CarList from "../../components/CarList/CarList";
import { fetchCars } from "../../actions";

export class Home extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }
  render() {
    const carsMap = Object.values(this.props.cars);
    return <CarList carsMap={carsMap} />;
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars.byId
  };
};

Home.propTypes = {
  cars: PropTypes.objectOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  { fetchCars }
)(Home);

// получаем cars объект/объектов из store home мы передали данные carsMap в CarList
