import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { signIn } from "../../actions/index";
const LoginPage = (props) => {
  const user = useSelector((state) => state.loggedUser);
  console.log("isLogged-Loginpage", user.isLogged);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        dispatch(signIn(data.result.data.user));
        localStorage.setItem("token", data.result.data.token);
        props.history.push("/dashboard");
      } else {
        alert("Wrong password");
        props.history.push("/login");
      }
    } catch (e) {
      alert("Wrong password");
      props.history.push("/login");
    }
  };

  return (
    <div className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">Log Into Your Account</p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        {!user.isLogged ? (
          <input type="submit" className="btn btn-primary" value="LogIn" />
        ) : (
            ""
          )}

        <p className="my-1">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
