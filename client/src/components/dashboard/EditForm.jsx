import React from 'react'
import styles from './styles/EditForm.module.css'
import { useStoreState, useStoreActions } from 'easy-peasy'

const EditForm = () => {
  const setIsEditFormOpen = useStoreActions((actions) => actions.setIsEditFormOpen)
  const updateTask = useStoreActions((actions) => actions.updateTask)
  const editTask = useStoreState((state) => state.editTask)
  const setEditTask = useStoreActions((actions) => actions.setEditTask)

  return (
    <form className={styles.editForm} onSubmit={(e) => updateTask(e)}>
        <label htmlFor='editForm'>Edit Task</label>
        <input 
            type="text"
            placeholder='Name'
            value={editTask.name}
            required
            autoFocus
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setEditTask({...editTask, 'name': e.target.value})}
        />
        <input 
            type="text"
            placeholder='Description'
            value={editTask.description}
            required
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setEditTask({...editTask, 'description': e.target.value})}
        />
        <input 
            type="date"
            value={editTask.due_date}
            required
            autoComplete='off'
            onClick={(e) => e.target.select()}
            onChange={(e) => setEditTask({...editTask, 'due_date': e.target.value})}
        />
        <input
            id={styles.checkBox}
            type="checkbox"
            checked={editTask.is_checked}
            onChange={() => setEditTask({...editTask, 'is_checked': !editTask.is_checked})}
        />
        <div className={styles.buttons}>
            <button
                type='submit'
                aria-label='Edit Task'
            >Edit</button>

            <button
                type='button'
                aria-label='Cancel Edit'
                onClick={() => {setIsEditFormOpen(false); setEditTask({'id': 0, 'name': '', 'description': '', 'due_date': '', 'is_checked': 0, 'user_id': 0, 'project_id': 0})}}
            >Cancel</button>
        </div>
    </form>
  )
}

export default EditForm