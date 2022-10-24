import {useState} from 'react'
import Error from './Error'

const Formulario = ({tasks, setTasks}) => {
  
  const [task, setTask] = useState('')
  const [error, setError] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random+fecha
}

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate that the form is not empty
    if (task == ''){
      console.log('Task empty')
      setError(true)
      return
    }
    setError(false)
    console.log(task, 'task')

    // Creamos el objeto tarea
    const objetoTarea = {
      task
    }

    objetoTarea.id = generarId()

    // Adding new task to the list of tasks
    setTasks([...tasks, objetoTarea])
    console.log(tasks)

      // Reiniciamos el formulario
    setTask('')
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
                    id='task'
                    type="text" 
                    className='w-full border-2 p-2 mt-2 rounded-md placeholder-gray-400 mr-2'
                    placeholder="Place your task to-do here"
                    value={task}
                    onChange={ (e) => setTask(e.target.value)}
                />
                <input 
                    type="submit"
                    value="add"
                    className='bg-emerald-600 font-bold uppercase text-white rounded-md p-2 mt-2 hover:bg-emerald-700 cursor-pointer transition-all'
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
