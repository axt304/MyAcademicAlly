import React from 'react'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Panel from './Panel'
import AddForm from './AddForm'
import apiRequest from '../../utils/apiRequest'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
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

  const fetchItems = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/tasks/15')
      if (!response.ok) throw Error("Did not receive expected data.")
      const currentTasks = await response.json()
      setTasks(currentTasks)
    } catch (err) {
      console.log(err)
    } finally {
      console.log(1)
    }
  }

  useEffect(() => {
    setTaskName('')
    setTaskDescription('')
    setTaskDate('')
  }, [isAddFormOpen])

  useEffect(() => {
    fetchItems()
  }, [])

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