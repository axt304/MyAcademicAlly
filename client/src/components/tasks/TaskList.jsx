import React from 'react'
import Task from './Task'
import styles from './styles/Task.module.css'
import { useStoreState } from 'easy-peasy'

const TaskList = () => {
  const tasks = useStoreState((state) => state.tasks)

  return (
    <ul className={styles.taskList}>
        {tasks.map(task => 
            <Task 
                key={task.id}
                task={task}
            />
        )}
    </ul>
  )
}

export default TaskList
