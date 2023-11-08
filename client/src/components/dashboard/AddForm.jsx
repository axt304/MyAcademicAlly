import React from 'react'
import styles from './styles/AddForm.module.css'
import { useStoreActions } from 'easy-peasy'

const AddForm = () => {
  const setTaskName = useStoreActions((actions) => actions.setTaskName)
  const setTaskDescription = useStoreActions((actions) => actions.setTaskDescription)
  const setTaskDate = useStoreActions((actions) => actions.setTaskDate)
  const setIsAddFormOpen = useStoreActions((actions) => actions.setIsAddFormOpen)
  const addTask = useStoreActions((actions) => actions.addTask)

  return (
    <form className={styles.addForm} onSubmit={(e) => addTask(e)}>
        <label htmlFor='addForm'>Add Task</label>
        <input 
            type="text"
            placeholder="Name"
            maxLength={45}
            required
            autoFocus
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setTaskName(e.target.value)}
        />
        <input 
            type="text"
            placeholder="Description"
            maxLength={256}
            required
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setTaskDescription(e.target.value)}
        />
        <input 
            type="date"
            placeholder="Date"
            required
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setTaskDate(e.target.value)}
        />
        <div className={styles.buttons}>
            <button
                type='submit'
                aria-label='Add Task'
            >Add</button>

            <button
                type='button'
                aria-label='Cancel Add'
                onClick={() => {setIsAddFormOpen(false); setTaskName(''); setTaskDescription(''); setTaskDate('')}}
            >Cancel</button>
        </div>
    </form>
  )
}

export default AddForm