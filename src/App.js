<<<<<<< HEAD
import React from 'react';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupPage from './Profile/Components/Signup/SignupPage';
import LoginPage from './Profile/Components/Login/LoginPage';
import HomePage from './Home/HomePage';
import ZonalHeadOperations from './ZonalHead/Components/ZonalHeadComponent';
import "bootstrap/dist/css/bootstrap.min.css"
=======
import React from "react";
import "./App.css";
import "./global.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupPage from "./Profile/Components/Signup/SignupPage";
import LoginPage from "./Profile/Components/Login/LoginPage";
import HomePage from "./Home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> c26ac79c6d77736b98195af22dd292dc21c91a38

function App() {
  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path='/login' exact />
        <Route component={SignupPage} path='/signup' exact />
        <Route component={ZonalHeadOperations} path="/zonalHead" exact/>
=======
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={LoginPage} path="/login" exact />
          <Route component={SignupPage} path="/signup" exact />
        </Switch>
>>>>>>> c26ac79c6d77736b98195af22dd292dc21c91a38
      </Router>
    </div>
  );
}

export default App;
