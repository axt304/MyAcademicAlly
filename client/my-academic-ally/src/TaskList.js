// TaskList.js
import React, { useState } from 'react';
import TaskInput from './TaskInput'; 
import TaskItems from './TaskItems';

function TaskList() { 
  const [tasks, setTasks] = useState([]); // declares state variable tasks, "useState" is a hook from React that                                               // initializes the state variable. this is because state variable is used
					//  to store data that can change so using this, it helps to update the state
					 // of a component hence add and remove tasks 
  // Define add, remove, and markAsComplete functions here.
// Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  // Function to remove a task by ID
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Function to mark a task as complete or incomplete
  const markAsComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      <TaskInput addTask={addTask} />
      <TaskItems tasks={tasks} onRemoveTask={removeTask} onMarkComplete={markAsComplete} />
    </div>
  );
}

export default TaskList;
