import { useState } from "react";
import "./App.css";
import Tasks from "./Components/Tasks";
import TodoForm from "./Components/TodoForm";

const goals = [
  {
    id: "t1",
    goal: "Get in Shape",
  },
  {
    id: "t2",
    goal: "Finish Udemy Courses",
  },
  {
    id: "t3",
    goal: "Make a million Dollars",
  },
];

function App() {
  const [tasks, setTasks] = useState(goals);

  const toEnlist = (e) => {
    const goalsNew = {
      ...e,
    };
    setTasks((prevTasks) => {
      return [goalsNew, ...prevTasks];
    });
  };

  return (
    <div className="App">
      <h1> This is a To do part</h1>
      <TodoForm onSaveData={toEnlist} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

//Look into adding an error module.
