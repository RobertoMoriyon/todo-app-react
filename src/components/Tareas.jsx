import Compleatadas from './Compleatadas'
import PorHacer from './PorHacer'


const Tareas = ({tasks, setTasks, eliminaTarea, setTarea, tasksCompleted, setTasksCompleted, completarTarea, undoTarea}) => {
  return (
    <div className='flex mt-10 m-5'>
        <div className='w-1/2'>
          {
            tasks.map( task => (
              <Compleatadas 
                key={task.id}
                task={task}
                eliminaTarea ={eliminaTarea}
                setTarea = {setTarea}
                completarTarea = {completarTarea}
              />

            ))
          }
        </div>
        <div className='w-1/2'>
          {
            tasksCompleted.map( taskComplete => (
              <PorHacer
                 key={taskComplete.id}
                 tasksCompleted = {tasksCompleted}
                 setTasksCompleted = {setTasksCompleted}
                 taskComplete = {taskComplete}
                 undoTarea = {undoTarea}
              />
            ))
          }
        </div>
    </div>
  )
}

export default Tareas
