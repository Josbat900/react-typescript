import { Task } from "../interfaces/Task"

interface Props{
  task: Task;
  deleteATask: (id: number) => void,
}

export default function TaskCard({task,deleteATask}: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h1 >{task.tittle}</h1>
      <p>ID: {task.id}</p>
      <p>{task.description}</p>
      <button 
      className="btn btn-danger"
      onClick={()=> task.id && deleteATask(task.id)}>
        Delete
      </button>
      </div>
  )
}
