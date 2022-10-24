const Compleatadas = ({task,eliminaTarea}) => {

  // const {task, id} = task --> NO FUNCIONA, revisar opciones

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar la tarea?')
    if (respuesta){
        eliminaTarea(task.id)
    }
  }

  return (
    <div className="bg-white rounded-md flex justify-between m-2 p-2">
        <div className='mt-1 mb-1'>     
            <p className='ml-3'>
                {task.task}
            </p>
        </div>
        <div className='mt-2'>
            <button className='mr-2'>
                <img src="./public/task.svg" alt="" />
            </button>
            <button
                onClick={handleEliminar}
            >
                <img src="./public/trash.svg" alt="" />
            </button>
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