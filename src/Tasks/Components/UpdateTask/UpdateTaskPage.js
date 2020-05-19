import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Select from 'react-select';
import axios from 'axios';  
import { useSelector, useDispatch } from "react-redux";

const UpdateTaskPage = (props) => {
  //define state
  const [formData, setFormData] = useState({
    towerId: "",
    address: "",
    taskType: "",
    taskTitle: "",
    taskDescription: "",
    technicianName: null,
    technicians:[
      { id: 1, value: 'sam',  label: 'Sam'},
      { id:2,value: 'Smith', label: 'Smith'},
      {id:3,value: 'Karen', label: 'Karen'}],
    startDate: "",
    estimatedEndDate: "",
    status: "",
    // item: null,
    items: null,
  });
  
    // const Url = "http://localhost:3030/api/task/" + props.match.params.id;
    const url='http://localhost:3030/api/task/list';
    // const token=localStorage.getItem('token');
     const user = useSelector((state) => state.loggedUser);
    const token =  user.user.token;
    const technicians1=[
      { id: 1, value: 'sam',  label: 'Sam'},
      { id:2,value: 'Smith', label: 'Smith'},
      {id:3,value: 'Karen', label: 'Karen'}];
   console.log("formData",formData);
  const { towerId, address, taskType, taskTitle, taskDescription, technicianName,technicians,
     startDate, estimatedEndDate, status,item,items } = formData;
    //get data from API 
    useEffect(() =>{
      const getTaskData = async () => {  
        const apiResult = await axios(url,{ headers: {"Authorization" : `${token}`} }); 
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$",apiResult);
        setFormData(apiResult.data.data[0]);  
      };  
      getTaskData();
     },[]);
 
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //update data on submit
  const onSubmit = (e) => {
    e.preventDefault();
    const apiInputData= {
      towerId,
      address,
      taskType,
      taskTitle,
      taskDescription,
      technicianName,
      startDate,
      estimatedEndDate,
      item
    }; 
    axios.put(`http://localhost:3030/api/task/update/${props.match.params.id}`, apiInputData,{ headers: {"Authorization" : `${token}`} })
     .then((result) => {
        props.history.push('/dashboard')  
     });  
      alert("Task Updated successfully!!");
  };
  //functions to handle select fields
  const handleTechnicianSelectChange = e => {
    setFormData({ ...formData, ['technicianName']: e });
  };
  const handleItemSelectChange = e => {
    setFormData({ ...formData, ['item']: e });
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
                  value={ formData.towerId}
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
                  value={formData.address}
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
                  value={formData.taskType}
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
                value={formData.taskTitle}
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
                  value={formData.taskDescription}
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
                options={technicians1}
                isMulti={true}
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
                  value={formData.startDate}
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
                  value={formData.estimatedEndDate}
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
                  value={formData.status}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <Select
                placeholder="select item"
                onChange={(e)=>handleItemSelectChange(e)}
                options={ formData.items}
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