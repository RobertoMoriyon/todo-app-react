import IconoReset from './../img/reset.svg'

const PorHacer = ({tasksCompleted, setTasksCompleted, taskComplete, undoTarea}) => {

  const {nombre, id} = taskComplete
  
  const handleUndo = () => {
    console.log("id dentro de handleUndo", id)
    undoTarea(id)
  }

  return (
    <div className="bg-white rounded-md flex justify-between m-2 p-2">
        <div className='mt-1 mb-1'>     
            <p className='line-through ml-3'>
                {nombre}
            </p>
        </div>
        <div className='mt-2'>
            <img 
                className='mt-2 cursor-pointer'
                src={IconoReset}
                alt="Icono Reset"
                onClick={handleUndo}
            />
            {/* <button
                onClick={handleUndo}
            >
                <img src="./assets/reset.svg" alt="" />
            </button> */}
        </div>
    </div>
  )
}

export default PorHacer
