import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const TaskListPage = () => {
  const [formData, setFormData] = useState([{
    towerId: "1234",
    address: "221, B Baker street",
    taskType: "Convert to 5G",
    taskTitle: "Convert to 5G",
    taskDescription: "Convert site in 5G tower",
    technicianName: "Sam, Smith, Joshua",
    startDate: "22-05-2020",
    estimatedEndDate: "13-06-2020",
    status: "Pending",
  },
  {
    towerId: "1234",
    address: "221, B Baker street",
    taskType: "Convert to 5G",
    taskTitle: "Convert to 5G",
    taskDescription: "Convert site in 5G tower",
    technicianName: "Sam, Smith, Joshua",
    startDate: "22-05-2020",
    estimatedEndDate: "13-06-2020",
    status: "Pending",
  },
  {
    towerId: "1234",
    address: "221, B Baker street",
    taskType: "Convert to 5G",
    taskTitle: "Convert to 5G",
    taskDescription: "Convert site in 5G tower",
    technicianName: "Sam, Smith, Joshua",
    startDate: "22-05-2020",
    estimatedEndDate: "13-06-2020",
    status: "Pending",
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
            {formData.map((taskrow, index) => (
              <tr>
                <td> { taskrow.towerId } </td>
                <td> {taskrow.address } </td>
                <td> {taskrow.taskTitle } </td>
                <td> { taskrow.technicianName } </td>
                <td> { taskrow.startDate } </td>
                <td> { taskrow.estimatedEndDate } </td>
              </tr>
            ))}  
            </tbody>
        </table>
    </Fragment>
  );
};

export default TaskListPage;