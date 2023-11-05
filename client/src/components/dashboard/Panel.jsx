import React from 'react'
import styles from './styles/Panel.module.css'
import { FaPlus } from 'react-icons/fa'
import TaskList from '../tasks/TaskList'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Panel = () => {
  const isAddFormOpen = useStoreState((state) => state.isAddFormOpen)
  const setIsAddFormOpen = useStoreActions((actions) => actions.setIsAddFormOpen)
  const isEditFormOpen = useStoreState((state) => state.isEditFormOpen)

  return (
    <div id={styles.panel}>
      <header className={styles.header}>
        <span>Dashboard</span>
        <FaPlus className={styles.dashboardAdd} onClick={() => {if (!isEditFormOpen) setIsAddFormOpen(!isAddFormOpen)}}/>
      </header>

      <main className={styles.main}>
        <TaskList />
      </main>
    </div>
  )
}

export default Panel