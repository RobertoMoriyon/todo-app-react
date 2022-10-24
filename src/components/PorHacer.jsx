const PorHacer = () => {
  return (
    <div className="bg-white rounded-md flex justify-between m-2 p-2">
        <div className='mt-1 mb-1'>     
            <p className='line-through ml-3'>
                Tareas realizadas
            </p>
        </div>
        <div className='mt-2'>
            <button>
                <img src="./public/reset.svg" alt="" />
            </button>
        </div>
    </div>
  )
}

export default PorHacer
