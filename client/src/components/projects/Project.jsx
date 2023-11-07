import React from 'react'
import { FaFolder, FaEdit, FaTrash, FaCheckSquare, FaCoffee } from 'react-icons/fa'
import styles from './styles/Project.module.css'
import { useStoreState, useStoreActions } from 'easy-peasy';


const Project = ({project}) => {
  const setDashboardTitle = useStoreActions((actions) => actions.setDashboardTitle)
  const setIsProjectView = useStoreActions((actions) => actions.setIsProjectView)
  const setCurrentProject = useStoreActions((actions) => actions.setCurrentProject)
  const tasks = useStoreState((state) => state.tasks)
  const setFilteredTasks = useStoreActions((actions) => actions.setFilteredTasks)

  return (
    <li className={styles.project}>
        <div 
            className={styles.folder} 
            style={{backgroundColor: project.color}} 
            onClick={(e) => {
                if (e.target.className !== "_folder_1bxyg_31") {
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
                <FaEdit className={styles.projectIcons} onClick={() => console.log('Edit: ' + project.name)}/>
                <FaTrash className={styles.projectIcons} onClick={() => console.log('Delete: ' + project.name)}/>
            </div>
        </div>
    </li>
  )
}

export default Project