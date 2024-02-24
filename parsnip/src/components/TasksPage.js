import React, { useState } from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

const TasksPage = ({ tasks }) => {
  const [taskLists, setTaskLists] = useState(() => {
    return TASK_STATUSES.map((status) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return { status, tasks: statusTasks };
    });
  });

  return (
    <div className="tasks">
      <div className="task-lists">
        {taskLists.map(({ status, tasks }) => (
          <TaskList key={status} status={status} tasks={tasks} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
