import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CompanyList from "./CompanyTable";

import axios from "axios";

import { API_URL } from "../constants"

class Home extends Component {
  state = {
    companies: []
  };

  componentDidMount() {
    this.resetState();
  }

  getAllCompanies = () => {
    axios.get(API_URL).then(res => this.setState({ companies: res.data }));
  };

  resetState = () => {
    this.getAllCompanies();
  };

  render() {
    return (
      <Container className="App-header">
        <Row>
          <Col>
            <CompanyList 
              companies={this.state.companies}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;