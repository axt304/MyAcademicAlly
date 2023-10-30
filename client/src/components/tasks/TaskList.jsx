import React from 'react'
import Task from './Task'
import styles from './styles/Task.module.css'

const TaskList = ({tasks, handleCheck, handleDelete}) => {
  return (
    <ul className={styles.taskList}>
        {tasks.map(task => 
            <Task 
                key={task.id}
                task={task}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        )}
    </ul>
  )
}

export default TaskList
