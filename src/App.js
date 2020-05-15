import React from 'react';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
import CreateUser from './Users/Components/CreateUser/CreateUser';
import UserList from './Users/Components/UserList/UserList';
import UpdateUser from './Users/Components/EditUser/EditUser';
import PrivateRoute from './routing/PrivateRoute';
//app.js is calling

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
          <PrivateRoute component={ZonalHeadOperations} path="/technision" exact />
          <Route component={CreateTaskPage } path='/createtask' exact />
          <Route component={UpdateTaskPage} path='/updatetask/:id' exact />
          <PrivateRoute component={TaskListPage} path='/tasklist' exact />
          <Route component={Dashboard} path='/dashboard' exact />
          <Route component={LoginPage} path='/logout' exact />
          <PrivateRoute component={CreateUser} path="/createuser" exact/>
          <PrivateRoute component={UserList} path="/userlist" exact/>
          <PrivateRoute component={UpdateUser} path="/editUser/:id" exact/>
          <Redirect from="*" to='/' />   
          </Switch>
        <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
