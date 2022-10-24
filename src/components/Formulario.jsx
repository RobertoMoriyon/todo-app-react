import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({tasks, setTasks, tarea, setTarea}) => {
  
  const [nombre, setNombre] = useState('')
  const [task, setTask] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(tarea).length>0){
      setNombre(tarea.nombre)
    }
  },[tarea])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random+fecha
}

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate that the form is not empty
    if (nombre == ''){
      setError(true)
      return
    }
    setError(false)
  
    // Building the Object of the task, with name and id when needed.
    const objetoTarea = {
      nombre
    }

    if (tarea.id) {
      objetoTarea.id = tarea.id
      //console.log(objetoTarea.nombre)
      const tasksUpdated = tasks.map(tasksState => tasksState.id === tarea.id ? objetoTarea: tasksState)
      setTasks(tasksUpdated)
      setTarea({})

    } else {
      objetoTarea.id = generarId()
      // Adding new task to the list of tasks
      setTasks([...tasks, objetoTarea])  
    }
    // Reiniciamos el formulario
    setNombre('')
  }

  return (
    <div className="flex">
        <div className='w-1/3'></div>
        <div className="w-1/3">
            <form 
              onSubmit={handleSubmit}
              className='mt-10 text-center'
            >
              <div className='flex'>
                <input
                    id='nombre'
                    type="text" 
                    className='w-full border-2 p-2 mt-2 rounded-md placeholder-gray-400 mr-2'
                    placeholder="Place your task to-do here"
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}
                />
                <input 
                    type="submit"
                    value={tarea.id ? "Edit" : "add"}
                    className={tarea.id ? 'bg-yellow-600 font-bold uppercase text-white rounded-md p-2 mt-2 hover:bg-yellow-700 cursor-pointer transition-all':'bg-emerald-600 font-bold uppercase text-white rounded-md p-2 mt-2 hover:bg-emerald-700 cursor-pointer transition-all'}
                />
              </div>
              {error && <Error />}
            </form>
        </div>
        <div className='w-1/3'></div>
    </div>
  )
}

export default Formulario
