import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <h1>
        <Link className="navbar-brand" to="/">
          POC
        </Link>
      </h1>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomePage;
