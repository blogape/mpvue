import React, { Component } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.min.css";
import Header from "./components/header/";
import Content from "./components/content/";
import "./home.css";
import Footer from "./components/footer/";
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={24} className="header">
            <Header />
          </Col>
          <Col  className="main-wrapper">
            {this.props.children}
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
