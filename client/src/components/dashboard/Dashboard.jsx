import React from 'react'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Panel from './Panel'
import AddForm from './AddForm'

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    {'id': 1, 'name': 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', 'description': 'first task description', 'due_date': '2023-10-28', 'is_checked': 0, 'user_id': 1, 'project_id': 1},
    {'id': 2, 'name': 'second task', 'description': 'second task description', 'due_date': '2023-10-29', 'is_checked': 1, 'user_id': 2, 'project_id': 2}
  ])

  const [isAddFormOpen, setIsAddFormOpen] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [currentID, setCurrentID] = useState(3)

  const handleAdd = async (e) => {
    e.preventDefault()
    const newTask = {'id': currentID, 'name': taskName, 'description': taskDescription, 'due_date': taskDate, 'is_checked': 0, 'user_id': 3, 'project_id': 3}
    setIsAddFormOpen(false)
    setTasks([...tasks, newTask])
    setCurrentID(currentID + 1)
  }

  const handleCheck = async (id) => {
    const newTasks = tasks.map(task => task.id === id ? {...task, is_checked: !task.is_checked} : task)
    setTasks(newTasks)
  }

  const handleDelete = async (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  useEffect(() => {
    setTaskName('')
    setTaskDescription('')
    setTaskDate('')
  }, [isAddFormOpen])

  return (
    <>
      <Sidebar 
        isAddFormOpen={isAddFormOpen}
        setIsAddFormOpen={setIsAddFormOpen}
      />
      <Panel 
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        isAddFormOpen={isAddFormOpen}
        setIsAddFormOpen={setIsAddFormOpen}
      />
      {isAddFormOpen && 
        <AddForm 
          handleAdd={handleAdd}
          setTaskName={setTaskName}
          setTaskDescription={setTaskDescription}
          setTaskDate={setTaskDate}
          setIsAddFormOpen={setIsAddFormOpen}
        />
      }
    </>
  )
}

export default Dashboard