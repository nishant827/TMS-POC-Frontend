import React from 'react';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupPage from './Profile/Components/Signup/SignupPage';
import LoginPage from './Profile/Components/Login/LoginPage';
import HomePage from './Home/HomePage';
import Header from './Home/Header/header';
import Footer from './Home/Footer/footer';
import ZonalHeadOperations from './Technision/Components/TechnisionComponent';
import CreateTaskPage from './Tasks/Components/CreateTask/CreateTaskPage';
import UpdateTaskPage from './Tasks/Components/UpdateTask/UpdateTaskPage';
import TaskListPage from './Tasks/Components/TaskList/TaskListPage';
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './Profile/Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Header />
      
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={LoginPage} path="/login" exact />
          <Route component={SignupPage} path="/signup" exact />
          <Route component={ZonalHeadOperations} path="/technision" exact />
          <Route component={CreateTaskPage } path='/createtask' exact />
          <Route component={UpdateTaskPage} path='/updatetask' exact />
          <Route component={TaskListPage} path='/tasklist' exact />
          <Route component={Dashboard} path='/dashboard' exact />
          <Route component={LoginPage} path='/logout' exact />
        </Switch>
        <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;