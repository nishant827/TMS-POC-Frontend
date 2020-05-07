import React from 'react';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupPage from './Profile/Components/Signup/SignupPage';
import LoginPage from './Profile/Components/Login/LoginPage';
import HomePage from './Home/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path='/login' exact />
        <Route component={SignupPage} path='/signup' exact />
      </Router>
    </div>
  );
}

export default App;
