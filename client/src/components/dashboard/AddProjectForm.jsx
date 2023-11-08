import React from 'react'
import styles from './styles/AddProjectForm.module.css'
import { useStoreActions, useStoreState } from 'easy-peasy'

const AddProjectForm = () => {
  const projectColor = useStoreState((state) => state.projectColor)
  const setProjectName = useStoreActions((actions) => actions.setProjectName)
  const setProjectColor = useStoreActions((actions) => actions.setProjectColor)
  const setIsAddProjectFormOpen = useStoreActions((actions) => actions.setIsAddProjectFormOpen)
  const addProject = useStoreActions((actions) => actions.addProject)

  return (
    <form className={styles.addProject} onSubmit={(e) => addProject(e)}>
        <label htmlFor='addProject'>Add Project</label>
        <input 
            className={styles.nameInput}
            type="text"
            placeholder="Name"
            maxLength={45}
            required
            autoFocus
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setProjectName(e.target.value)}
        />
        <span className={styles.colorSpan} style={{color: projectColor}}>
            Color:
            <input 
                className={styles.color}
                type="color"
                maxLength={45}
                required
                autoComplete='off'
                onClick={(e) => e.target.select()}
                onChange={(e) => setProjectColor(e.target.value)}
            />
        </span>
        <div className={styles.buttons}>
            <button
                type='submit'
                aria-label='Add Project'
            >Add</button>

            <button
                type='button'
                aria-label='Cancel Add'
                onClick={() => {setIsAddProjectFormOpen(false); setProjectName(''); setProjectColor('#000000')}}
            >Cancel</button>
        </div>
    </form>
  )
}

export default AddProjectForm