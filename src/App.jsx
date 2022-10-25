import {useState} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Tareas from './components/Tareas'

function App() {

  const [tasks, setTasks] = useState([])
  const [tasksCompleted, setTasksCompleted] = useState([])

  const [tarea, setTarea] = useState({})

  const eliminaTarea = id => {
    const tasksUpdated = tasks.filter(tarea => tarea.id !== id)
    setTasks(tasksUpdated)
  }

  const completarTarea = id => {
    
    // First we find the element we want to move to the Completed tasks
    const found = tasks.find(ele => ele.id == id)
  
    // We add the found task to the array of task completed
    setTasksCompleted([...tasksCompleted, found])
    
    // We need to remove it from the normal task
    const tasksUpdated = tasks.filter(tarea => tarea.id !== id)
    setTasks(tasksUpdated)
  }
  
  const undoTarea = id => {
    // First we find the element we want to move to the Completed tasks
    const found = tasksCompleted.find(ele => ele.id == id)
  
    // We add the found task to the array of task completed
    setTasks([...tasks, found])
    
    // We need to remove it from the normal task
    const tasksUpdated = tasksCompleted.filter(tarea => tarea.id !== id)
    setTasksCompleted(tasksUpdated)
  }

  return (
    <div className="App">
      <Header />
      <Formulario 
        tasks = {tasks}
        setTasks = {setTasks}
        tarea = {tarea}
        setTarea = {setTarea}
      />
      <Tareas 
        tasks = {tasks}
        setTasks = {setTasks}
        tarea = {tarea}
        setTarea = {setTarea}
        eliminaTarea = {eliminaTarea}
        completarTarea = {completarTarea}
        tasksCompleted = {tasksCompleted}
        setTasksCompleted = {setTasksCompleted}
        undoTarea = {undoTarea}

      />
    </div>
  )
}

export default App
