import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { signIn } from "../actions/index";
import './LoginPage.css';
import { Badge, CardHeader, Pagination, PaginationItem, PaginationLink, Table, Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const LoginPage = (props) => {
  const user = useSelector((state) => state.loggedUser);
  console.log("isLogged-Loginpage", user.isLogged);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [modal, setModal] = useState(false);
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const toggle = () => setModal(!modal);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let { status, data } = await axios.post(
        "http://localhost:3030/api/login",
        {
          email,
          password,
        }
      );
      if (status === 200) {
        data.result.data.user.token = data.result.data.token;
        dispatch(signIn(data.result.data.user));
        localStorage.setItem("token", data.result.data.token);
        localStorage.setItem("role", data.result.data.user.role);
        localStorage.setItem("firstName", data.result.data.user.firstName);
        localStorage.setItem("lastName", data.result.data.user.lastName);
        localStorage.setItem("email", data.result.data.user.email);
        if (data.result.data.user.role === "TECH") {
          props.history.push("/tasklist");
        } else {
          props.history.push("/userlist");
          // props.history.push("/profile");
        }
      } else {
        alert("Wrong password");
        props.history.push("/login");
      }
    } catch (e) {
      toggle()
      props.history.push("/login");
    }
  };

 
  return(<div className="wrapper fadeInDown">
  <div id="formContent">
    {/* Tabs Titles */}
    {/* Icon */}
    <div className="fadeIn first">
      <img
        src="https://www.clipartmax.com/png/middle/441-4414384_towers-clipart-bts-cell-site-icon.png"
        id="icon"
        alt="User Icon"
       style={{    "marginTop": "9px",
        "height": "62px"}}/>
      <h4>Log Into Your Account</h4>
    </div>
    {/* Login Form */}
    <form onSubmit={(e) => onSubmit(e)}>
          <input 
            type="email"
            placeholder="Email Address"
            className="fadeIn second"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
                    <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            className="fadeIn third"
            value={password}
            onChange={(e) => onChange(e)}
          />
     
      <input type="submit" className="fadeIn fourth" value="Log In" />
    </form>
    {/* Remind Passowrd */}
    <div id="formFooter">
      <a className="underlineHover" href="#">
      Forgot Passowrd
      </a>
    </div>
  </div>

  <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} style={{backgroundColor:"red"}}>Login Failed</ModalHeader>
        <ModalBody>
          Invalid username or password
        </ModalBody>
        <ModalFooter>
          {/* <Button color="secondary" onClick={redirect}>Close</Button> */}
        </ModalFooter>
      </Modal>

 
</div>
)
};

export default LoginPage;
