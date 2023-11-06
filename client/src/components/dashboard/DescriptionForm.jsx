import React from 'react'
import styles from './styles/DescriptionForm.module.css'
import { useStoreState, useStoreActions } from 'easy-peasy'

const DescriptionForm = () => {
  const setIsDescriptionFormOpen = useStoreActions((actions) => actions.setIsDescriptionFormOpen)
  const taskName = useStoreState((state) => state.taskName)
  const taskDescription = useStoreState((state) => state.taskDescription)

  return (
    <form className={styles.descriptionForm}>
        <label htmlFor='descriptionForm' id={styles.title}>{taskName}</label>
        <label>{taskDescription}</label>
        <button
            type='button'
            aria-label='Close Description'
            onClick={() => setIsDescriptionFormOpen(false)}
        >Close</button>
    </form>
  )
}

export default DescriptionForm