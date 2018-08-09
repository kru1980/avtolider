import React, { Component } from "react";
import { connect } from "react-redux";

import { addCar } from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.addCar();
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(
  null,
  { addCar }
)(App);
