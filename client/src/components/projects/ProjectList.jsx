import React from 'react'
import Project from './Project'
import styles from './styles/Project.module.css'
import { useStoreState } from 'easy-peasy'

const ProjectList = () => {
  const projects = useStoreState((state) => state.projects)

  return (
    <ul className={styles.projectList}>
        {projects.map(project => 
            <Project 
                key={project.id}
                project={project}
            />
        )}
    </ul>
  )
}

export default ProjectList
