import React from 'react'
import { useState } from 'react'
import styles from './styles/Panel.module.css'
import { FaPlus } from 'react-icons/fa'
import TaskList from '../tasks/TaskList'

const Panel = () => {
  const [tasks, setTasks] = useState([
    {'id': 1, 'name': 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', 'description': 'first task description', 'due_date': '2023-10-28', 'is_checked': 0, 'user_id': 1, 'project_id': 1},
    {'id': 2, 'name': 'second task', 'description': 'second task description', 'due_date': '2023-10-29', 'is_checked': 1, 'user_id': 2, 'project_id': 2}
  ])

  const handleAdd = async (title, description, dueDate) => {
    console.log(1)
  }

  const handleCheck = async (id) => {
    const newTasks = tasks.map(task => task.id === id ? {...task, is_checked: !task.is_checked} : task)
    setTasks(newTasks)
  }

  const handleDelete = async (id) => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }




  return (
    <div id={styles.panel}>
      <header className={styles.header}>
        <span>Dashboard</span>
        <FaPlus className={styles.dashboardAdd} />
      </header>

      <main className={styles.main}>
        <TaskList 
          tasks={tasks} 
          handleCheck={handleCheck} 
          handleDelete={handleDelete} 
        />
      </main>
    </div>
  )
}

export default Panel