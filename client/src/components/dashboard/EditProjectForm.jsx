import React from 'react'
import styles from './styles/EditProjectForm.module.css'
import { useStoreActions, useStoreState } from 'easy-peasy'

const EditProjectForm = () => {
  const currentProject = useStoreState((state) => state.currentProject)
  const setCurrentProject = useStoreActions((actions) => actions.setCurrentProject)
  const setIsEditProjectFormOpen = useStoreActions((actions) => actions.setIsEditProjectFormOpen)
  const updateProject = useStoreActions((actions) => actions.updateProject)

  return (
    <form className={styles.editProject} onSubmit={(e) => updateProject(e)}>
        <label htmlFor='editProject'>Edit Project</label>
        <input 
            className={styles.nameInput}
            type="text"
            placeholder="Name"
            value={currentProject.name}
            required
            autoFocus
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setCurrentProject({...currentProject, 'name': e.target.value})}
        />
        <span className={styles.colorSpan} style={{color: currentProject.color}}>
            Color:
            <input 
                className={styles.color}
                type="color"
                value={currentProject.color}
                required
                autoComplete='off'
                onClick={(e) => e.target.select()}
                onChange={(e) => setCurrentProject({...currentProject, 'color': e.target.value})}
            />
        </span>
        <div className={styles.buttons}>
            <button
                type='submit'
                aria-label='Edit Project'
            >Edit</button>

            <button
                type='button'
                aria-label='Cancel Edit'
                onClick={() => {setIsEditProjectFormOpen(false); setCurrentProject({'id': 0, 'name': '', 'color': '', 'user_id': 0})}}
            >Cancel</button>
        </div>
    </form>
  )
}

export default EditProjectForm