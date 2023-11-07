import React from 'react'
import { FaFolder, FaEdit, FaTrash, FaCheckSquare, FaCoffee } from 'react-icons/fa'
import styles from './styles/Project.module.css'
import { useStoreState, useStoreActions } from 'easy-peasy';


const Project = ({project}) => {
  const setDashboardTitle = useStoreActions((actions) => actions.setDashboardTitle)
  const setIsProjectView = useStoreActions((actions) => actions.setIsProjectView)

  return (
    <li className={styles.project}>
        <div className={styles.folder} style={{backgroundColor: project.color}} onClick={() => setDashboardTitle(project.name)}>
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