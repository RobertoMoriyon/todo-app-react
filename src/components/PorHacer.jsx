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
            <button
                onClick={handleUndo}
            >
                <img src="./public/reset.svg" alt="" />
            </button>
        </div>
    </div>
  )
}

export default PorHacer
