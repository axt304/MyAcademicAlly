import React, { useState } from 'react';
const [tasks, setTasks] = useState([]);
{tasks.map((task, index) => (
  <div key={index} className={task.completed ? 'completed-task' : 'pending-task'}>
    {task.title}
  </div>
))}
const [newTask, setNewTask] = useState('');

const handleAddTask = () => {
  if (newTask.trim() !== '') {
    setTasks([...tasks, { title: newTask, completed: false }]);
    setNewTask(''); // Clear the input field
  }
};

