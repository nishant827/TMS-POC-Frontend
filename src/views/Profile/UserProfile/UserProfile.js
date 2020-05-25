import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./components/PageTitle";
import UserDetails from "./components/UserDetails";
import UserAccountDetails from "./components/UserAccountDetails";

const UserProfileLite = () => (
  <Container fluid className="main-content-container px-4" style={{"marginTop": "-65px"}}>
    <Row noGutters className="page-header py-4">
      <PageTitle title="" subtitle="" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <UserDetails />
      </Col>
      <Col lg="8">
        <UserAccountDetails />
      </Col>
    </Row>
  </Container>
);

export default UserProfileLite;