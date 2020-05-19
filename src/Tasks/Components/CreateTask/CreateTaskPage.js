import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Select from 'react-select';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { CreateTask } from "../../TaskActions";

const CreateTaskPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loggedUser);
  const token =  user.user.token;
  const [formData, setFormData] = useState({
    towerId: "",
    address: "",
    taskType: "",
    taskTitle: "",
    taskDescription: "",
    technicianName: null,
    technicians: [
      { id: 1, value: 'sam',  label: 'Sam'},
      { id:2,value: 'Smith', label: 'Smith'},
      {id:3,value: 'Karen', label: 'Karen'}],
    startDate: "",
    estimatedEndDate: "",
    status: "",
  });
  // const token=localStorage.getItem('token');
  const { towerId, address, taskType, taskTitle, taskDescription, technicianName, technicians,startDate, estimatedEndDate, status } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
      console.log( towerId, address, taskType, taskTitle, taskDescription, technicianName, startDate, estimatedEndDate, status);
      const apiInputData= {
        towerId,
        address,
        taskType,
        taskTitle,
        taskDescription,
        technicianName,
        startDate,
        estimatedEndDate
      };
      console.log('=============>',JSON.stringify(apiInputData));
      try {
        let { status, data } = await axios.post(
          "http://localhost:3030/api/task/new",
          {
            towerId, address, taskType, taskTitle, taskDescription, technicians,technicianName, startDate, estimatedEndDate
          },
          { headers: {"Authorization" : `${token}`} }
        );
        if (status === 200) {
        //   dispatch(CreateTask(data.result.data.user));
        //   localStorage.setItem("token", data.result.data.token);
          // props.history.push("/dashboard");
          props.handleClose();
        } else {
          alert("Task not Created");
          props.history.push("/dashboard");
        }
      } catch (e) {
        console.log("what is the error",e);
        alert("Error while creating task");
        props.history.push("/dashboard");
      }
      
      alert("Task created successfully!!");
  };
  const handleTechnicianSelectChange = e => {
    console.log(e);
    
    setFormData({ ...formData, ['technicianName']: e });
  };
  return (
    <Fragment>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col-sm-12">
          <div className= "row" >
            <div className= "col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className= "form-control"
                  placeholder="Site Name"
                  name="towerId"
                  value={ towerId}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className= "col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className= "form-control"
                  placeholder="Site address"
                  name="address"
                  value={address}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            
          </div>  
          <div className="row">
            <div className= "col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="task type"
                  name="taskType"
                  value={taskType}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className= "col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className= "form-control input-lg"
                placeholder="task title"
                name="taskTitle"
                value={taskTitle}
                onChange={(e) => onChange(e)}
              />
            </div>
            </div>
          </div>
          <div className="row">
            <div className= "col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className= "form-control input-lg"
                  placeholder="task description"
                  name="taskDescription"
                  value={taskDescription}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <Select
                  name="technicians"
                  placeholder="select Technician"
                  onChange={handleTechnicianSelectChange}
                  options={technicians}
                  isMulti= {true}
                  removeSelected={false}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className= "form-control input-lg"
                  placeholder="start date"
                  name="startDate"
                  value={startDate}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className= "form-control input-lg"
                  placeholder="estimated End Date"
                  name="estimatedEndDate"
                  value={estimatedEndDate}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  type="text"
                  className= "form-control input-lg"
                  placeholder="status"
                  name="status"
                  value={status}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
          </div>
        </div>  
        </div>
        <input type="submit" className="primary btn btn-primary" value="Create Task" />
      </form>
      
    </Fragment>
  );
};

export default CreateTaskPage;