import React from 'react'
import { useEffect } from 'react'
import Sidebar from './Sidebar'
import Panel from './Panel'
import AddForm from './AddForm'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Dashboard = () => {
  const isAddFormOpen = useStoreState((state) => state.isAddFormOpen)
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
      {isAddFormOpen && <AddForm />}
    </>
  )
}

export default Dashboard