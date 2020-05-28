import React from "react";
import { Container, Row, Col } from "shards-react";
import { useSelector } from "react-redux";
import PageTitle from "./components/PageTitle";
import UserDetails from "./components/UserDetails";
import UserAccountDetails from "./components/UserAccountDetails";

const UserProfileLite = (props) => {
  const user = useSelector((state) => state.loggedUser);
  const userDetails = {
    // firstName : localStorage.getItem('firstName'),
    // lastName : localStorage.getItem('lastName'),
    // email: localStorage.getItem('email'),
    // phone: localStorage.getItem('phone'),
    // code: localStorage.getItem('code')
    firstName: user.user ? user.user.firstName: null,
    lastName: user.user ? user.user.lastName: null,
    email: user.user ? user.user.email: null,
    phone: user.user ? user.user.contactDetails.mobileNo: null,
    code: user.user ? user.user.contactDetails.countryCode: null,
  }
  return (

    <Container fluid className="main-content-container px-4" style={{ "marginTop": "-65px" }}>
      <Row noGutters className="page-header py-4">
        <PageTitle title="" subtitle="" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="4">
          <UserDetails userDetails={userDetails} />
        </Col>
        <Col lg="8">
          <UserAccountDetails props={props} userDetails={userDetails} />
        </Col>
      </Row>
    </Container>
  )

}


export default UserProfileLite;