import React from 'react'
import { useEffect } from 'react'
import Sidebar from './Sidebar'
import Panel from './Panel'
import AddForm from './AddForm'
import EditForm from './EditForm'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Dashboard = () => {
  const isAddFormOpen = useStoreState((state) => state.isAddFormOpen)
  const isEditFormOpen = useStoreState((state) => state.isEditFormOpen)
  const setTaskName = useStoreActions((actions) => actions.setTaskName)
  const setTaskDescription = useStoreActions((actions) => actions.setTaskDescription)
  const setTaskDate = useStoreActions((actions) => actions.setTaskDate)
  const fetchTasks = useStoreActions((actions) => actions.fetchTasks)

  useEffect(() => {
    setTaskName('')
    setTaskDescription('')
    setTaskDate('')
  }, [isAddFormOpen])

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <Sidebar />
      <Panel />
      {isAddFormOpen && !isEditFormOpen && <AddForm />}
      {isEditFormOpen && !isAddFormOpen && <EditForm />}
    </>
  )
}

export default Dashboard