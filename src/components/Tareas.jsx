import Compleatadas from './Compleatadas'
import PorHacer from './PorHacer'


const Tareas = ({tasks, setTasks, eliminaTarea}) => {
  return (
    <div className='flex mt-10 m-5'>
        <div className='w-1/2'>
          {
            tasks.map( task => (
              <Compleatadas 
                key={task.id}
                task={task}
                eliminaTarea ={eliminaTarea}
              />

            ))
          }
        </div>
        <div className='w-1/2'>
            <PorHacer />
            <PorHacer />
        </div>
    </div>
  )
}

export default Tareas
