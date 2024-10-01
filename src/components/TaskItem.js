import React from "react";
import { format } from "date-fns";

const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  const formattedDate = format(new Date(task.dueDate), "dd-MM-yyyy");

  return (
    <div className={`task-item ${task.priority}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {formattedDate}</p>
      <p>
        Priority:{" "}
        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
      </p>{" "}
      {/* Display priority */}
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
