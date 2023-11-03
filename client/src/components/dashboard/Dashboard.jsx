import React from 'react'
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Panel from './Panel'
import AddForm from './AddForm'
import api from '../../api/api'
import apiRequest from '../../utils/apiRequest'

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [isAddFormOpen, setIsAddFormOpen] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')

  const handleAdd = async (e) => {
    e.preventDefault()
    try {
      const newTask = {'name': taskName, 'description': taskDescription, 'due_date': taskDate, is_checked: 0, user_id: 11, project_id: 21}
      setIsAddFormOpen(false)
      const response = await api.post('/api/tasks', newTask)
      fetchItems()
    } catch (err) {
      console.log(`Error: ${err.message}`)
    }
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
      const response = await api.get('/api/alltasks')
      setTasks(response.data)
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