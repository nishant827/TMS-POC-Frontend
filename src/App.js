import React from 'react';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupPage from './Profile/Components/Signup/SignupPage';
import LoginPage from './Profile/Components/Login/LoginPage';
import CreateTaskPage from './Tasks/Components/CreateTask/CreateTaskPage';
import UpdateTaskPage from './Tasks/Components/UpdateTask/UpdateTaskPage';
import TaskListPage from './Tasks/Components/TaskList/TaskListPage';
import AddItemPage from './Tasks/Components/CreateTask/AddItemPage';
import HomePage from './Home/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path='/login' exact />
        <Route component={SignupPage} path='/signup' exact />
        <Route component={CreateTaskPage } path='/createtask' exact />
        <Route component={UpdateTaskPage} path='/updatetask' exact />
        <Route component={TaskListPage} path='/tasklist' exact />
        <Route component={AddItemPage} path= '/additem' exact />
      </Router>
    </div>
  );
}

export default App;
