import IconoTask from './../img/task.svg'
import IconoReset from './../img/reset.svg'
import IconoEdit from './../img/edit.svg'
import IconoTrash from './../img/trash.svg'

const Compleatadas = ({task,eliminaTarea,setTarea, completarTarea}) => {

  const {nombre, id} = task
 // console.log(task)

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar la tarea?')
    if (respuesta){
        eliminaTarea(id)
    }
  }

  const handleCompletar = () => {
    console.log("id dentro de handleCompletar", id)
    completarTarea(id)
  }

  return (
    <div className="bg-white rounded-md flex justify-between m-2 p-2">
        <div className='mt-1 mb-1'>     
            <p className='ml-3'>
                {nombre}
            </p>
        </div>
        <div className='mt-2 flex'>
            <img 
                className='mr-2 cursor-pointer'
                src={IconoTask}
                alt="Task Icon"
                onClick={handleCompletar}
            />
            <img 
                className='mt-2 cursor-pointer'
                src={IconoEdit}
                alt="Icono Edit"
                onClick={()=> setTarea(task)}
            />
            <img 
                className='mt-2 cursor-pointer'
                src={IconoTrash}
                alt=""
                onClick={handleEliminar}
            />
            {/* <button
                onClick={handleEliminar}
            >
                <img src="./../img/trash.svg" alt="" />
            </button> */}
            {/* <!--
            <button
                className='bg-blue-400 px-1 text-white rounded uppercase font-semibold hover:bg-blue-500 cursor-pointer mr-2'
            >done
            </button>
            <button
                className='bg-red-400 px-1 text-white rounded uppercase font-semibold hover:bg-red-500 cursor-pointer mr-2'
            >delete</button>--> */}
        </div>
    </div>
    
  )
}

export default Compleatadas