import React, { Component } from "react";
import { connect } from "react-redux";

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

export default connect(
  mapStateToProps,
  { fetchCars }
)(Home);
