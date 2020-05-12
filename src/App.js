import React from 'react';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupPage from './Profile/Components/Signup/SignupPage';
import LoginPage from './Profile/Components/Login/LoginPage';
import HomePage from './Home/HomePage';
import ZonalHeadOperations from './ZonalHead/Components/ZonalHeadComponent';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={LoginPage} path="/login" exact />
          <Route component={SignupPage} path="/signup" exact />
          <Route component={ZonalHeadOperations} path="/zonalHead" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
