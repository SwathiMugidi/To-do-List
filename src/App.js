import React, { useState } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import Notification from "./components/Notification";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>To-Do-List</h1>
      <ThemeToggle />
      <Notification />
      {editingTask ? (
        <EditTask task={editingTask} onUpdate={updateTask} />
      ) : (
        <AddTask onAdd={addTask} />
      )}
      <TaskList
        tasks={tasks}
        onEdit={(id) => setEditingTask(tasks.find((task) => task.id === id))}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
