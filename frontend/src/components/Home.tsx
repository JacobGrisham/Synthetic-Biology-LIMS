import React, { useEffect, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import CompanyTable from "./CompanyTable";
import Header from "./Header"

interface IHomeProps {
  companies: any;
  isPending: boolean;
  onRequestOfCompanies?: any;
}

const Home = (props: IHomeProps) => {

  const { companies, isPending, onRequestOfCompanies } = props

  useEffect(() => {
    onRequestOfCompanies();
  }, [onRequestOfCompanies])

  return isPending ? <h1>Loading...</h1> : (
    <Fragment>
      <Header />
      <Container>
        <Row>
          <Col>
            <CompanyTable 
              companies={companies}
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Home;