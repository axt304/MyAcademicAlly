import React from 'react'
import styles from './styles/AddProjectForm.module.css'
import { useStoreActions, useStoreState } from 'easy-peasy'

const AddProjectForm = () => {
  const projectColor = useStoreState((state) => state.projectColor)
  const setProjectName = useStoreActions((actions) => actions.setProjectName)
  const setProjectColor = useStoreActions((actions) => actions.setProjectColor)
  const setIsAddProjectFormOpen = useStoreActions((actions) => actions.setIsAddProjectFormOpen)

  return (
    <form className={styles.addProject} onSubmit={(e) => {e.preventDefault(); console.log(1)}}>
        <label htmlFor='addProject'>Add Project</label>
        <input 
            className={styles.nameInput}
            type="text"
            placeholder="Name"
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
                onClick={() => {setIsAddProjectFormOpen(false); setProjectColor('#000000')}}
            >Cancel</button>
        </div>
    </form>
  )
}

export default AddProjectForm