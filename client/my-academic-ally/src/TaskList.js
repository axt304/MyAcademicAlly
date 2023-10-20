// TaskList.js
import React, { useState } from 'react';
import TaskInput from './TaskInput'; 
import TaskItems from './TaskItems';

function TaskList() { 
  const [tasks, setTasks] = useState([]); // declares state variable tasks, "useState" is a hook from React that                                               // initializes the state variable. this is because state variable is used
					//  to store data that can change so using this, it helps to update the state
					 // of a component hence add and remove tasks 
  // Define add, remove, and markAsComplete functions here.
  return (
    <div>
      <h2>Task List</h2>
      {/* Task input and add button */}
      {/* Task list */}
    </div>
  );
}

export default TaskList;

