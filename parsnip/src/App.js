import React from "react";
import TasksPage from "./components/TasksPage";
import "./App.css";

const App = () => {
  return (
    <div className="main-content">
      <TasksPage tasks={mockTasks} />
    </div>
  );
};

export default App;
