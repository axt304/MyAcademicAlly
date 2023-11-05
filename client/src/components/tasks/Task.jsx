import React from 'react'
import { FaCheck, FaBook, FaEdit, FaTrash } from 'react-icons/fa'
import styles from './styles/Task.module.css'
import { useStoreActions } from 'easy-peasy';

const Task = ({task}) => {
  const checkTask = useStoreActions((actions) => actions.checkTask)
  const deleteTask = useStoreActions((actions) => actions.deleteTask)

  return (
    <li className={(task.is_checked) ? `${styles.task} ${styles.taskCompleted}` : `${styles.task}`}>
        <FaCheck 
            className={(task.is_checked) ? `${styles.taskIcons} ${styles.checked}` : `${styles.taskIcons} ${styles.unchecked}`} 
            onClick={() => checkTask(task.id)}
        />

        <FaBook 
            className={`${styles.taskIcons} ${styles.taskIconsHover}`}
            onClick={() => console.log(task.description)}
        />

        <FaEdit 
            className={`${styles.taskIcons} ${styles.taskIconsHover}`}
            onClick={() => console.log('edit')}
        />

        <FaTrash 
            className={`${styles.taskIcons} ${styles.taskIconsHover}`}
            onClick={() => deleteTask(task.id)}
        />

        <span
            className={styles.taskName}
            style={(task.is_checked) ? {textDecoration: 'line-through'} : null}
        >{task.name}</span>

        <span
            className={styles.taskDate}
        >{task.due_date}</span>
    </li>
  )
}

export default Task
