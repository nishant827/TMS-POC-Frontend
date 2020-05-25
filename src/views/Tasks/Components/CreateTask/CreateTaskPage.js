import React, { Fragment, useState,useEffect } from "react";
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
    //technicians: null,
    /*[
      { id: 1, value: 'sam',  label: 'Sam'},
      { id:2,value: 'Smith', label: 'Smith'},
      {id:3,value: 'Karen', label: 'Karen'}],*/
    startDate: "",
    estimatedEndDate: "",
    status: "",
  });
  // const token=localStorage.getItem('token');
  const { towerId, address, taskType, taskTitle, taskDescription, technicianName, technicians,startDate, estimatedEndDate, status } = formData;
  //const [technicianList, setTechnicianList]= useState();
  const [selectTech,setTech]=useState({id:"",value:"",label:""});

 //api and assign to state
  const GetData = async () => {  
    const result = await axios('http://localhost:3030/api/user/userType/list?userType=TECH&limit=10&offset=0',{ headers: {"Authorization" : `${token}`} }); 
    console.log("technicians",JSON.stringify(result.data.data));
    const mappedData = result.data.data.map(element => ({ value: element.firstName, label: element.firstName, ...element }))
    setFormData({ ...formData, technicians: mappedData });
  };  
  useEffect(() => { 
    GetData();  
  }, []); 
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
          props.history.push("/tasklist");
        }
      } catch (e) {
        console.log("what is the error",e);
        alert("Error while creating task");
        props.history.push("/tasklist");
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
                  placeholder="Site Address"
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
                  placeholder="Task Type"
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
                placeholder="Task Title"
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
                  placeholder="Task Description"
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
                  placeholder="Select Technician"
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
                  type="date"
                  className= "form-control input-lg"
                  placeholder="Start Date"
                  name="startDate"
                  value={startDate}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <input
                  type="date"
                  className= "form-control input-lg"
                  placeholder="Estimated End Date"
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
                  placeholder="Status"
                  name="status"
                  value={status}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
          </div>
            <div className="row">
              {/* <div className="col-sm-4"></div> */}
              <div className="col-sm-12">
                <input type="submit" className="primary btn btn-primary btn-block " value="Create Task" />
              </div>
              {/* <div className="col-sm-4">
                <button className="btn btn-primary" onClick={() => { props.handleClose() }}>Cancel</button>
              </div> */}
              {/* <div className="col-sm-2"></div> */}
            </div>
        </div>  
        </div>
        {/* <input type="submit" className="primary btn btn-primary" value="Create Task" /> */}
      </form>
      
    </Fragment>
  );
};

export default CreateTaskPage;