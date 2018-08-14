import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";

import HeaderNav from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CarSale from "./pages/CarSale/CarSale";
import SignIn from "./pages/Signin/Signin";

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <HeaderNav />
          </Header>
          <Content
            style={{
              minHeight: "calc(100vh - 64px)",
              padding: "16px",
              boxSizing: "border-box"
            }}
          >
            <Route exact path="/" component={Home} />
            <Route path="/sale" component={CarSale} />
            <Route path="/signin" component={SignIn} />
          </Content>
        </Layout>
      </Router>
    );
  }
}

export default App;
