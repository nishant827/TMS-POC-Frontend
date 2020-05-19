import React, { Fragment, useState } from "react";
import SidebarWithList from "../../../Home/sidebar/sidebar";
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

function Dashboard(props) {
  
  
  const isLogged=useSelector(state=>state.loggedUser);
  const dispatch=useDispatch();

  console.log("isLogged",isLogged);
  const createTask = () => {
    props.history.push("/createtask");
  };

  const updateTask = () => {
    props.history.push("/updatetask");
  };

  const getTaskList = () => {
    props.history.push("/tasklist");
  };

  return (
    <div>

       {/* <div className="row mt-5">

     <div className="col-4">
       <button onClick={() => createTask()}>Create Task</button>
     </div>
     <div className="col-4">
       <button onClick={() => updateTask()}>Update Task</button>
     </div>

     <div className="col-4">
       <button onClick={() => getTaskList()}>Get Task List</button>
     </div>
   </div> */}
    </div>

  );
}

export default Dashboard;
