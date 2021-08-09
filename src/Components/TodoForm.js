import React, { useState } from "react";
import "./TodoForm";

function TodoForm(props) {
  const [goal, setGoal] = useState("");

  const handleNewGoal = (e) => {
    setGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      goal: goal,
    };
    props.onSaveData(newGoal);
    setGoal("");
  };

  return (
    <div>
      <h1>This is the To do form</h1>
      <form onSubmit={handleSubmit}>
        <label>Goal: </label>
        <input type="text" value={goal} onChange={handleNewGoal}></input>
        <button> Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
