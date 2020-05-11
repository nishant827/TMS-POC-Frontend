import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const TaskListPage = () => {
  const [formData, setFormData] = useState([{
    towerId: "",
    address: "",
    taskType: "",
    taskTitle: "",
    taskDescription: "",
    technicianName: "",
    startDate: "",
    estimatedEndDate: "",
    status: "",
  },
  {
    towerId: "",
    address: "",
    taskType: "",
    taskTitle: "",
    taskDescription: "",
    technicianName: "",
    startDate: "",
    estimatedEndDate: "",
    status: "",
  },
  {
    towerId: "",
    address: "",
    taskType: "",
    taskTitle: "",
    taskDescription: "",
    technicianName: "",
    startDate: "",
    estimatedEndDate: "",
    status: "",
  }]);

  const {  } = formData;


  return (
    <Fragment>
        <h1 className="large text-primary">Task List</h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Site Id</th>
                <th scope="col">Site Address</th>
                <th scope="col">Task Title</th>
                <th scope="col">Technicians</th>
                <th scope="col">start Date</th>
                <th scope="col">End Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>221 B Baker street</td>
                    <td>Convert to 5G</td>
                    <td>Sam, Joshua, Smith</td>
                    <td>21-05-2020</td>
                    <td>30-05-2020</td>
                </tr>
            </tbody>
        </table>
    </Fragment>
  );
};

export default TaskListPage;