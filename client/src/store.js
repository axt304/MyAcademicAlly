import { createStore, action, thunk, computed } from "easy-peasy"
import api from "./api/api"

export default createStore({
    tasks: [],
    setTasks: action((state, payload) => {
        state.tasks = payload
    }),
    taskName: '',
    setTaskName: action((state, payload) => {
        state.taskName = payload
    }),
    taskDescription: '',
    setTaskDescription: action((state, payload) => {
        state.taskDescription = payload
    }),
    taskDate: '',
    setTaskDate: action((state, payload) => {
        state.taskDate = payload
    }),
    isAddFormOpen: false,
    setIsAddFormOpen: action((state, payload) => {
        state.isAddFormOpen = payload
    }),
    isEditFormOpen: false,
    setIsEditFormOpen: action((state, payload) => {
        state.isEditFormOpen = payload
    }),
    editTask: {'id': 0, 'name': '', 'description': '', 'due_date': '', 'is_checked': 0, 'user_id': 0, 'project_id': 0},
    setEditTask: action((state, payload) => {
        state.editTask = payload
    }),
    fetchTasks: thunk(async (actions, e, helpers) => {
        try {
            const { setTasks } = helpers.getStoreActions()
            const response = await api.get('/api/alltasks')
            setTasks(response.data)
          } catch (err) {
            console.log(err)
          } finally {
            console.log(1)
        }
    }),
    addTask: thunk(async (actions, e, helpers) => {
        e.preventDefault()
        try {
            const { tasks, taskName, taskDescription, taskDate } = helpers.getState()
            const { setIsAddFormOpen, fetchTasks } = helpers.getStoreActions()
            const newTask = {'name': taskName, 'description': taskDescription, 'due_date': taskDate, 'is_checked': 0, 'user_id': 11, 'project_id': 21}
            setIsAddFormOpen(false)
            const response = await api.post('/api/tasks', newTask)
            console.log(response.data)
            fetchTasks()
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }),
    checkTask: thunk(async (actions, id, helpers) => {
        try {
            const { tasks } = helpers.getState()
            const { setTasks } = helpers.getStoreActions()
            const newTasks = tasks.map(task => task.id === id ? {...task, is_checked: !task.is_checked} : task)
            setTasks(newTasks)
            const newTask = newTasks.filter(task => task.id === id)[0]
      
            if (newTask['is_checked'] === 0 || newTask['is_checked'] === false) {
              newTask['is_checked'] = 0
            } else {
              newTask['is_checked'] = 1
            }
            
            const response = await api.put(`/api/tasks/${id}`, newTask)
            console.log(response.data)
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }),
    deleteTask: thunk(async (actions, id, helpers) => {
        try {
            const { tasks } = helpers.getState()
            const { setTasks } = helpers.getStoreActions()
            const newTasks = tasks.filter(task => task.id !== id)
            setTasks(newTasks)
            const response = await api.delete(`/api/tasks/${id}`)
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }),
    updateTask: thunk(async (actions, e, helpers) => {
        e.preventDefault()
        try {
            const { tasks, editTask } = helpers.getState()
            const { setTasks, setIsEditFormOpen } = helpers.getStoreActions()
            const newTasks = tasks.map(task => task.id === editTask.id ? {...task, 'name': editTask.name, 'description': editTask.description, 'due_date': editTask.due_date, 'is_checked': editTask.is_checked} : task)
            setTasks(newTasks)
            setIsEditFormOpen(false)
            const newTask = newTasks.filter(task => task.id === editTask.id)[0]

            if (newTask['is_checked'] === 0 || newTask['is_checked'] === false) {
                newTask['is_checked'] = 0
              } else {
                newTask['is_checked'] = 1
            }

            const response = await api.put(`/api/tasks/${newTask.id}`, newTask)
        } catch (err) {
            console.log(`Error: ${err.message}`)
        } finally {
            const { setEditTask } = helpers.getStoreActions()
            setEditTask({'id': 0, 'name': '', 'description': '', 'due_date': '', 'is_checked': 0, 'user_id': 0, 'project_id': 0})
        }
    })
})