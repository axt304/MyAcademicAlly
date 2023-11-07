import React from 'react'
import Task from './Task'
import styles from './styles/Task.module.css'
import { useStoreState } from 'easy-peasy'

const TaskList = () => {
  const filteredTasks = useStoreState((state) => state.filteredTasks)  

  return (
    <ul className={styles.taskList}>
        {filteredTasks.map(task => 
            <Task 
                key={task.id}
                task={task}
            />
        )}
    </ul>
  )
}

export default TaskList
