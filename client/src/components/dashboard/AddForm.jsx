import React from 'react'
import styles from './styles/AddForm.module.css'

const AddForm = ({handleAdd, setTaskName, setTaskDescription, setTaskDate, setIsAddFormOpen}) => {

  return (
    <form className={styles.addForm} onSubmit={(e) => handleAdd(e)}>
        <label htmlFor='addForm'>Add Task</label>
        <input 
            type="text"
            placeholder="Name"
            required
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setTaskName(e.target.value)}
        />
        <input 
            type="text"
            placeholder="Description"
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
                onClick={() => setIsAddFormOpen(false)}
            >Cancel</button>
        </div>
    </form>
  )
}

export default AddForm