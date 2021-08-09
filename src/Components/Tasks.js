import React from "react";
import Task from "./Task";
import "./Tasks.css";

function Tasks(props) {
  return (
    <div className="tasks__container">
      <h1>This is the task section</h1>
      {props.tasks.map((i) => (
        <Task id={i.id} goal={i.goal} />
      ))}
    </div>
  );
}

export default Tasks;
