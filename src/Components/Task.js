import React, { useState } from "react";
import "./Task.css";

function Task(props) {
  const [done, setDone] = useState(false);

  const handleDone = () => {
    setDone(!done);
  };

  return (
    <div className="task__container">
      {done === true ? (
        <div className="done">
          <h3>{props.goal}</h3>
        </div>
      ) : (
        <div className="label">
          <h3>{props.goal}</h3>
        </div>
      )}
      <div className="action">
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
}

export default Task;
