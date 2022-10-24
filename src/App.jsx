import {useState} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Tareas from './components/Tareas'

function App() {

  const [tasks, setTasks] = useState([])

  const eliminaTarea = id => {
    const tareasActualizadas = tasks.filter(tarea => tarea.id !== id)
    setTasks(tareasActualizadas)
  }
  
  return (
    <div className="App">
      <Header />
      <Formulario 
        tasks = {tasks}
        setTasks = {setTasks}
      />
      <Tareas 
        tasks = {tasks}
        setTasks = {setTasks}
        eliminaTarea = {eliminaTarea}
      />
    </div>
  )
}

export default App
