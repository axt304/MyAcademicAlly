import React from 'react'
import { FaCheck, FaBook, FaEdit, FaTrash } from 'react-icons/fa'
import styles from './styles/Task.module.css'
import { useStoreState, useStoreActions } from 'easy-peasy';

const Task = ({task}) => {
  //state
  const isAddFormOpen = useStoreState((state) => state.isAddFormOpen)
  const isEditFormOpen = useStoreState((state) => state.isEditFormOpen)
  const isDescriptionFormOpen = useStoreState((state) => state.isDescriptionFormOpen)
  const projects = useStoreState((state) => state.projects)

  //actions
  const checkTask = useStoreActions((actions) => actions.checkTask)
  const deleteTask = useStoreActions((actions) => actions.deleteTask)
  const setIsDescriptionFormOpen = useStoreActions((actions) => actions.setIsDescriptionFormOpen)
  const setTaskName = useStoreActions((actions) => actions.setTaskName)
  const setTaskDescription = useStoreActions((actions) => actions.setTaskDescription)
  const setIsEditFormOpen = useStoreActions((actions) => actions.setIsEditFormOpen)
  const setEditTask = useStoreActions((actions) => actions.setEditTask)


  return (
    <li 
        className={(task.is_checked) ? `${styles.task} ${styles.taskCompleted}` : `${styles.task}`} 
        style={
            (task.project_id && task.project_id !== 0) ? {borderColor: projects.filter(project => project.id === task.project_id)[0]['color']} : null
        }
    >
        <FaCheck 
            className={(task.is_checked) ? `${styles.taskIcons} ${styles.checked}` : `${styles.taskIcons} ${styles.unchecked}`} 
            onClick={() => {if (!isAddFormOpen && !isEditFormOpen && !isDescriptionFormOpen) checkTask(task.id)}}
        />

        <FaBook 
            className={`${styles.taskIcons} ${styles.taskIconsHover}`}
            onClick={() => {
                if (!isAddFormOpen && !isEditFormOpen && !isDescriptionFormOpen) {
                    setIsDescriptionFormOpen(!isDescriptionFormOpen)
                    setTaskName(task.name)
                    setTaskDescription(task.description)
                }
            }}
        />

        <FaEdit 
            className={`${styles.taskIcons} ${styles.taskIconsHover}`}
            onClick={() => {
                if (!isAddFormOpen && !isDescriptionFormOpen && !isEditFormOpen) {
                    setIsEditFormOpen(!isEditFormOpen)
                    setEditTask(task) 
                }
            }}
        />

        <FaTrash 
            className={`${styles.taskIcons} ${styles.taskIconsHover}`}
            onClick={() => {if (!isAddFormOpen && !isEditFormOpen && !isDescriptionFormOpen) deleteTask(task.id)}}
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
