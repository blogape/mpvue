import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "./header/index.js";
import "./index.css";
class Home extends Component {
  render() {
    return (
      <div className="blog-index">
        <Row>
          <Col span={24} className="blog-header">
            <Header />
          </Col>
          <Col span={24}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
