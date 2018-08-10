import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CarSale from "./pages/CarSale/CarSale";
import SignIn from "./pages/Signin/Signin";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/sale" component={CarSale} />
          <Route path="/signin" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
