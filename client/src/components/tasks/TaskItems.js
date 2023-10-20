// TaskItems.js
import React from 'react';

function TaskItems({ tasks, removeTask, markAsComplete }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
          </span>
          <button onClick={() => removeTask(task.id)}>Remove</button>
          <button onClick={() => markAsComplete(task.id)}>Complete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskItems;

