import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Select from 'react-select';


const UpdateTaskPage = (props) => {
  const [formData, setFormData] = useState({
    towerId: "",
    address: "",
    taskType: "",
    taskTitle: "",
    taskDescription: "",
    technicianName: null,
    technicians: [
      { value: 'sam', label:'Sam' },
      { value: 'Smith', label: 'Smith'},
      {value: 'Karen', label: 'Karen'}],
    startDate: "",
    estimatedEndDate: "",
    status: "",
    item: null,
    options: [
      { value: 'receiver', label: 'Receiver' },
      { value: 'transmitter', label: 'Transmitter' },
      { value: 'battery', label: 'Battery' },
    ],
});

  const { towerId, address, taskType, taskTitle, taskDescription, technicianName,technicians, startDate, estimatedEndDate, status,item,options } = formData;

  const onChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
      alert("Task Updated successfully!!");
  };
  
  const handleTechnicianSelectChange = e => {
    console.log(technicianName);
    console.log(e, e[0]);
    setFormData({ ...formData, [technicianName]: e[0].value });
    console.log(technicianName)
  };
  const handleItemSelectChange = e => {
    setFormData({ ...formData, [item]: e.value });
  };
  
  return (
    <Fragment>
      <h1 className="large text-primary">Update Task</h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className= "row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className= "row" >
            <div className= "col-sm-6">
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
                onChange={(e)=>handleTechnicianSelectChange(e)}
                options={technicians}
                isMulti
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
            <div className="col-sm-6">
              <Select
                placeholder="select item"
                onChange={(e)=>handleItemSelectChange(e)}
                options={options}
                isMulti
              />
            </div>
          </div>
        <input type="submit" className="primary btn btn-primary" value="Update Task" />
      </div>
      <div className="col-sm-2"></div>  
      </div>  
      </form>
    </Fragment>
  );
};

export default UpdateTaskPage;