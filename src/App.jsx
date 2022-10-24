import {useState} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Tareas from './components/Tareas'

function App() {

  const [tasks, setTasks] = useState([])
  const [tarea, setTarea] = useState({})

  const eliminaTarea = id => {
    const tasksUpdated = tasks.filter(tarea => tarea.id !== id)
    setTasks(tasksUpdated)
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
        setTarea = {setTarea}
        eliminaTarea = {eliminaTarea}
      />
    </div>
  )
}

export default App
