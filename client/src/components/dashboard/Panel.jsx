import React from 'react'
import styles from './styles/Panel.module.css'
import { FaPlus } from 'react-icons/fa'
import TaskList from '../tasks/TaskList'

const Panel = ({tasks, handleCheck, handleDelete, isAddFormOpen, setIsAddFormOpen}) => {
  return (
    <div id={styles.panel}>
      <header className={styles.header}>
        <span>Dashboard</span>
        <FaPlus className={styles.dashboardAdd} onClick={() => setIsAddFormOpen(!isAddFormOpen)}/>
      </header>

      <main className={styles.main}>
        <TaskList 
          tasks={tasks} 
          handleCheck={handleCheck} 
          handleDelete={handleDelete} 
          isAddFormOpen={isAddFormOpen}
        />
      </main>
    </div>
  )
}

export default Panel