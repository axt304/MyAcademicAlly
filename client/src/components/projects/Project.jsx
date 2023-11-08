import React from 'react'
import { FaFolder, FaEdit, FaTrash, FaCheckSquare, FaCoffee } from 'react-icons/fa'
import styles from './styles/Project.module.css'
import { useStoreState, useStoreActions } from 'easy-peasy';


const Project = ({project}) => {
  //state
  const isAddProjectFormOpen = useStoreState((state) => state.isAddProjectFormOpen)
  const isEditProjectFormOpen = useStoreState((state) => state.isEditProjectFormOpen)
  const tasks = useStoreState((state) => state.tasks)

  //actions
  const setDashboardTitle = useStoreActions((actions) => actions.setDashboardTitle)
  const setIsProjectView = useStoreActions((actions) => actions.setIsProjectView)
  const setCurrentProject = useStoreActions((actions) => actions.setCurrentProject)
  const setIsEditProjectFormOpen = useStoreActions((actions) => actions.setIsEditProjectFormOpen)
  const setFilteredTasks = useStoreActions((actions) => actions.setFilteredTasks)
  const deleteProject = useStoreActions((actions) => actions.deleteProject)

  return (
    <li className={styles.project}>
        <div 
            className={styles.folder} 
            style={{backgroundColor: project.color}} 
            onClick={(e) => {
                if (isAddProjectFormOpen || isEditProjectFormOpen) {
                    return
                }
                if ((typeof(e.target.className) !== 'string')) {
                    return
                }
                if (!(e.target.className.includes('folder'))) {
                    return
                }
                setDashboardTitle(project.name)
                setCurrentProject(project)
                const newTasks = tasks.filter((task) => task.project_id === project.id)
                setFilteredTasks(newTasks)
                setIsProjectView(false)
            }}
        >
            {project.name}
            <div className={styles.projectIconsDiv}>
                <FaEdit className={styles.projectIcons} onClick={() => {
                    if (!isAddProjectFormOpen && !isEditProjectFormOpen) {
                        setCurrentProject(project)
                        setIsEditProjectFormOpen(!isEditProjectFormOpen)
                    }
                }}/>
                <FaTrash className={styles.projectIcons} onClick={() => {if (!isAddProjectFormOpen && !isEditProjectFormOpen) deleteProject(project.id)}}/>
            </div>
        </div>
    </li>
  )
}

export default Project