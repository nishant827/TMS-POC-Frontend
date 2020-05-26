import React, { useState } from "react";
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

const Settings = (props) => {
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPassword2, setnewPassword2] = useState("");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (newPassword === newPassword2) {
      try {
        console.log("aaaaa");
        let { data } = await axios.put(
          "http://localhost:3030/api/user/update/password",
          {
            currentPassword,
            newPassword,
          },
          { headers: { Authorization: `${token}` } }
        );
        console.log("data", data);
        if (data.status === 501) {
          alert(data.message);
        }
        if (data.status === 200) {
          if (role === "TECH") {
            alert("password updated succesfully");
            props.history.push("/tasklist");
          } else {
            alert("password updated succesfully");
            props.history.push("/userlist");
          }
          console.log("siuccesss");
        } else {
          alert("Wrong password");
        }
      } catch (e) {
        console.log("Error", e);
        props.history.push("/profile");
      }
    } else {
      alert("Passwords does not match");
    }
  };

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Password</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <FormInput
                      type="password"
                      id="currentPassword"
                      placeholder="Current Password"
                      value={currentPassword}
                      onChange={(e) => {
                        setcurrentPassword(e.target.value);
                      }}
                    />
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <FormInput
                      type="password"
                      id="newPassword"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => {
                        setnewPassword(e.target.value);
                      }}
                    />
                  </Col>
                  <Col md="6" className="form-group">
                    <label htmlFor="newPassword2">
                      Enter Again New Password
                    </label>
                    <FormInput
                      type="password"
                      id="newPassword2"
                      placeholder="Enter Again New Password"
                      value={newPassword2}
                      onChange={(e) => {
                        setnewPassword2(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                <Button
                  className="btn btn-primary"
                  onClick={(e) => onSubmit(e)}
                >
                  Update Password
                </Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Settings;
