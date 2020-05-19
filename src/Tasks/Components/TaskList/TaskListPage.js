import React, { Fragment, useState,useEffect } from "react";
// import { Badge, CardHeader, Pagination, PaginationItem, PaginationLink, Table ,Modal, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import CreateTaskPage from "../CreateTask/CreateTaskPage";
import { useSelector } from "react-redux";
import { Modal, Button}  from "react-bootstrap";

// const token=localStorage.getItem('token');
const TaskListPage = (props) => {
  const userData = useSelector((state) => state.loggedUser);
  const token = userData.user.token;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Intialize state
  const [formData, setFormData] = useState([]);
  //get token
  // const token=localStorage.getItem('token');
  //get data from api and assign to state
  const GetData = async () => {  
    const result = await axios('http://localhost:3030/api/task/list',{ headers: {"Authorization" : `${token}`} }); 
    console.log("taskLaist",result);
    setFormData(result.data.data);  
  };  
  useEffect(() => {  
    GetData();  
  }, []); 
  console.log("formdata",formData);
  //delete task 
  const deleteTask = (id) => {  
    axios.delete('http://localhost:3030/api/task/remove/' + id,{ headers: {"Authorization" : `${token}`} })  
      .then((result) => {  
        GetData()
        props.history.push('/tasklist')  ;
      });  
  };  
  //edit task
  const editTask = (id) => {  
    console.log("editTaks is calling",id);
    console.log("props",props);
    props.history.push({  
      pathname: '/updatetask/' + id  

    });  
  };  

  return (
    <Fragment>
      <h1 className="large text-primary">Task List</h1>
      <button className="btn btn-primary" onClick={handleShow}>
        Add Task
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTaskPage handleClose={(e) => handleClose()} />
        </Modal.Body>
      </Modal>
      <table className="table" style={{marginTop:'40px'}}>
        <thead>
          <tr>
            <th scope="col">Site Id</th>
            <th scope="col">Site Address</th>
            <th scope="col">Task Title</th>
            <th scope="col">Technicians</th>
            <th scope="col">start Date</th>
            <th scope="col">End Date</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {formData.map((taskrow, index) => (
            <tr key={taskrow._id}>
              <td> {taskrow.towerId} </td>
              <td> {taskrow.address} </td>
              <td> {taskrow.taskTitle} </td>
              {/* <td> { taskrow.technicianName[0].value } </td> */}
              <td>
                <select>
                  {taskrow.technicianName ? (
                    taskrow.technicianName.map((name, i) => (
                      <option value="">{name.value} </option>
                    ))
                  ) : (
                    <option value=""></option>
                  )}
                </select>
              </td>
              <td> {taskrow.startDate} </td>
              <td> {taskrow.estimatedEndDate} </td>
              <td>
                <div className="btn-group">
                  {/* <button 
                      className="btn btn-primary" 
                      onClick={() => { editTask(taskrow._id) }}
                      >
                      Edit
                    </button>   */}
                  <button
                    // style={{ background: "#0366ee" }}
                    className='btn btn-primary m-2'
                    onClick={() => {
                      editTask(taskrow._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => {
                      deleteTask(taskrow._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TaskListPage;