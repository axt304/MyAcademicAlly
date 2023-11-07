import React from 'react'
import { FaFolder, FaFolderPlus, FaStickyNote, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa'
import styles from './styles/Sidebar.module.css'
import { useStoreState, useStoreActions, action } from 'easy-peasy';

const Sidebar = () => {
  const isAddFormOpen = useStoreState((state) => state.isAddFormOpen)
  const setIsAddFormOpen = useStoreActions((actions) => actions.setIsAddFormOpen)
  const isEditFormOpen = useStoreState((state) => state.isEditFormOpen)
  const isDescriptionFormOpen = useStoreState((state) => state.isDescriptionFormOpen)
  const isAddProjectFormOpen = useStoreState((state) => state.isAddProjectFormOpen)
  const setIsAddProjectFormOpen = useStoreActions((actions) => actions.setIsAddProjectFormOpen)
  const isProjectView = useStoreState((state) => state.isProjectView)
  const setIsProjectView = useStoreActions((actions) => actions.setIsProjectView)
  const setDashboardTitle = useStoreActions((actions) => actions.setDashboardTitle)
  const setCurrentProject = useStoreActions((actions) => actions.setCurrentProject)
  const tasks = useStoreState((state) => state.tasks)
  const setFilteredTasks = useStoreActions((actions) => actions.setFilteredTasks)

  return (
    <div id={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li>
            <h3 id={styles.user}>Hi User!</h3>
        </li>
        
        <li>
            <button onClick={() => {setDashboardTitle('Dashboard'); setIsProjectView(false); setCurrentProject({'id': 0, 'name': '', 'color': '', 'user_id': 0}); setFilteredTasks(tasks)}}>
                <FaTachometerAlt className={styles.fa}/>
                <span className={styles.label}>Dashboard</span>
            </button>
        </li>

        <li>
            <button onClick={() => {setDashboardTitle('Projects'); setIsProjectView(true); setCurrentProject({'id': 0, 'name': '', 'color': '', 'user_id': 0})}}>
                <FaFolder className={styles.fa}/>
                <span className={styles.label}>Projects</span>
            </button>
        </li>

        {isProjectView &&
            <li>
                <button onClick={() => {if (!isAddFormOpen && !isEditFormOpen && !isDescriptionFormOpen) setIsAddProjectFormOpen(!isAddProjectFormOpen)}}>
                    <FaFolderPlus className={styles.fa}/>
                    <span className={styles.label}>Create Project</span>
                </button>
            </li>
        }

        {!isProjectView &&
            <li>
                <button onClick={() => {if (!isEditFormOpen && !isDescriptionFormOpen && !isAddProjectFormOpen) setIsAddFormOpen(!isAddFormOpen)}}>
                    <FaStickyNote className={styles.fa}/>
                    <span className={styles.label}>Create Task</span>
                </button>
            </li>
        }

        <li id={styles.signOut}>
            <button onClick={() => console.log(4)}>
                <FaSignOutAlt className={styles.fa}/>
                <span className={styles.label}>Sign Out</span>
            </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar