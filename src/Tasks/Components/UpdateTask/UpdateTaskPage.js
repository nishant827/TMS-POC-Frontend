import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import AddItemPage from "../CreateTask/AddItemPage";


const UpdateTaskPage = (props) => {
  const [formData, setFormData] = useState(props);

  const { towerId, address, taskType, taskTitle, taskDescription, technicianName, startDate, estimatedEndDate, status } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
      console.log( towerId, address, taskType, taskTitle, taskDescription, technicianName, startDate, estimatedEndDate, status);
      alert("Task created successfully!!");
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Update Task</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
      <div className= "row" >
        <div className= "col-sm-4">
          <div className="form-group">
            <input
              type="text"
              className= "form-control"
              placeholder="TowerId"
              name="towerId"
              value={ towerId}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className= "col-sm-4">
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
        <div className= "col-sm-4">
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
        <div className= "col-sm-4">
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
        <div className= "col-sm-4">
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
        <div className="col-sm-4">
          <div className="form-group">
            <input
              type="text"
              className= "form-control input-lg"
              placeholder="technician name"
              name="technicianName"
              value={technicianName}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
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
        <div className="col-sm-4">
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
        <div className="col-sm-4">
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
      
        <input type="submit" className="primary btn btn-primary" value="Update Task" />
      </form>
      <form>

      </form>
      <AddItemPage />
    </Fragment>
  );
};

export default UpdateTaskPage;