import React from 'react'
import { useEffect } from 'react'
import Sidebar from './Sidebar'
import Panel from './Panel'
import AddForm from './AddForm'
import EditForm from './EditForm'
import DescriptionForm from './DescriptionForm'
import AddProjectForm from './AddProjectForm'
import EditProjectForm from './EditProjectForm'
import { useStoreState, useStoreActions } from 'easy-peasy'

const Dashboard = () => {
  //state
  const isAddFormOpen = useStoreState((state) => state.isAddFormOpen)
  const isEditFormOpen = useStoreState((state) => state.isEditFormOpen)
  const isDescriptionFormOpen = useStoreState((state) => state.isDescriptionFormOpen)
  const isAddProjectFormOpen = useStoreState((state) => state.isAddProjectFormOpen)
  const isEditProjectFormOpen = useStoreState((state) => state.isEditProjectFormOpen)

  //actions
  const fetchTasks = useStoreActions((actions) => actions.fetchTasks)
  const fetchProjects = useStoreActions((actions) => actions.fetchProjects)

  useEffect(() => {
    fetchProjects().then(
      fetchTasks()
    )
  }, [])

  return (
    <>
      <Sidebar />
      <Panel />
      {isAddFormOpen && <AddForm />}
      {isEditFormOpen && <EditForm />}
      {isDescriptionFormOpen && <DescriptionForm />}
      {isAddProjectFormOpen && <AddProjectForm />}
      {isEditProjectFormOpen && <EditProjectForm />}
    </>
  )
}

export default Dashboard