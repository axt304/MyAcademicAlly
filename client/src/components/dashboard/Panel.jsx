import React from 'react'
import styles from './styles/Panel.module.css'
import { FaPlus } from 'react-icons/fa'
import TaskList from '../tasks/TaskList'
import { useStoreState, useStoreActions } from 'easy-peasy'
import ProjectList from '../projects/ProjectList'

const Panel = () => {
  const isAddFormOpen = useStoreState((state) => state.isAddFormOpen)
  const setIsAddFormOpen = useStoreActions((actions) => actions.setIsAddFormOpen)
  const isEditFormOpen = useStoreState((state) => state.isEditFormOpen)
  const isDescriptionFormOpen = useStoreState((state) => state.isDescriptionFormOpen)
  const isAddProjectFormOpen = useStoreState((state) => state.isAddProjectFormOpen)
  const isProjectView = useStoreState((state) => state.isProjectView)
  const dashboardTitle = useStoreState((state) => state.dashboardTitle)
  const setIsAddProjectFormOpen = useStoreActions((actions) => actions.setIsAddProjectFormOpen)

  return (
    <div id={styles.panel}>
      <header className={styles.header}>
        <span>{dashboardTitle}</span>
        <FaPlus 
          className={styles.dashboardAdd} 
          onClick={() => {
            if (!isEditFormOpen && !isDescriptionFormOpen && !isAddProjectFormOpen && !isProjectView) {
              setIsAddFormOpen(!isAddFormOpen) 
            } else if (!isEditFormOpen && !isDescriptionFormOpen && !isAddFormOpen && isProjectView) {
              setIsAddProjectFormOpen(!isAddProjectFormOpen)
            }
          }}
        />
      </header>

      <main className={styles.main}>
        {!isProjectView && <TaskList />}
        {isProjectView && <ProjectList />}
      </main>
    </div>
  )
}

export default Panel