import React, { useState } from 'react';
import './App.css'; // Import your CSS styles here if needed
import TaskList from './TaskList'; // Import your TaskList component

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to remove a task by its ID
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Function to mark a task as complete by its ID
  const markAsComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Academic Ally</h1>
      </header>
      <main>
        <TaskList
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          markAsComplete={markAsComplete}
        />
      </main>
    </div>
  );
}

export default App;

