import React, { Fragment, useState } from "react";

function Dashboard(props) {
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
    <div className="row mt-5">
      <div className="col-4">
        <button onClick={() => createTask()}>Create Task</button>
      </div>
      <div className="col-4">
        <button onClick={() => updateTask()}>Update Task</button>
      </div>

      <div className="col-4">
        <button onClick={() => getTaskList()}>Get Task List</button>
      </div>
    </div>
  );
}

export default Dashboard;
