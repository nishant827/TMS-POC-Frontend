import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
} from "shards-react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { profileData } from "../../actions/index";

const UserAccountDetails = ({ userDetails, props }) => {
  const user = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(userDetails.firstName);
  const [lastName, setLastName] = useState(userDetails.lastName);
  const [phone, setPhone] = useState(userDetails.phone);
  const [countryCode, setCountryCode] = useState(userDetails.code);
  // const token = localStorage.getItem("token");
  // const id = localStorage.getItem("id");
  const token = user.user.token;
  const id = user.user._id;
  useEffect(() => {
    console.log(user, "user");
  }, [user]);
  const handleUpdate = async () => {
    try {
      let { data } = await axios.put(
        `http://localhost:3030/api/user/update/${id}`,
        {
          firstName,
          lastName,
          contactDetails: {
            countryCode: countryCode,
            mobileNo: phone,
          },
        },
        { headers: { Authorization: `${token}` } }
      );
      if (data.status === 200) {
        alert(data.message);
        dispatch(
          profileData({
            firstName,
            lastName,
            contactDetails: {
              countryCode: countryCode,
              mobileNo: phone,
            },
          })
        );
        props.history.push("/profile");
      } else {
        alert(data.message);
        props.history.push("/profile");
      }
    } catch (e) {
      console.log("Error", e);
      props.history.push("/profile");
    }
  };
  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Account Details</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">First Name</label>
                    <FormInput
                      id="feFirstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Last Name</label>
                    <FormInput
                      id="feLastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <FormInput
                      type="email"
                      id="feEmail"
                      placeholder="Email Address"
                      value={userDetails.email}
                      onChange={() => {}}
                      autoComplete="email"
                      readOnly
                    />
                  </Col>
                  {/* Password */}
                  {/* <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Age</label>
                  <FormInput
                    type="text"
                    id="feAge"
                    placeholder="Age"
                    // value="EX@MPL#P@$$w0RD"
                    onChange={() => {}}
                    // autoComplete="current-password"
                  />
                </Col> */}
                </Row>
                {/* <FormGroup>
                <label htmlFor="feAddress">Address</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value="1234 Main St."
                  onChange={() => {}}
                />
              </FormGroup> */}
                <Row form>
                  {/* City */}
                  {/* <Col md="6" className="form-group">
                  <label htmlFor="feCity">City</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    onChange={() => {}}
                  />
                </Col> */}
                  {/* State */}
                  <Col md="4" className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <FormInput
                      type="text"
                      id="phone"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </Col>
                  {/* Zip Code */}
                  <Col md="3" className="form-group">
                    <label htmlFor="CountryCode">Country Code</label>
                    <FormInput
                      type="text"
                      id="CountryCode"
                      placeholder="Country Code"
                      value={countryCode}
                      onChange={(e) => {
                        setCountryCode(e.target.value);
                      }}
                    />
                  </Col>
                </Row>

                <Button className="btn btn-primary" onClick={handleUpdate}>
                  Update Account
                </Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

UserAccountDetails.defaultProps = {
  title: "Account Details",
};

export default UserAccountDetails;
