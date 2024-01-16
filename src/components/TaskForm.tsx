import { ChangeEvent, FormEvent, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Task } from "../interfaces/Task";

interface Props {
  addANewTask: (task: Task) => void
} 

type handleInPutChangeType = ChangeEvent<HTMLInputElement|HTMLTextAreaElement>

const initialState = {
  tittle: "",
  description: ""
}
export default function TaskForm({addANewTask}: Props) {

    const [task, setTask] = useState(initialState)

    const handleInPutChange = ({ 
      target: {name,value},
    }: handleInPutChangeType) => {
      setTask({ ...task, [name]: value})};

    const handleNewTask = (e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      addANewTask(task)
      setTask(initialState)
    }
    
  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>

      <form onSubmit={handleNewTask}>
        <input 
        type="text" 
        placeholder="Write a tittle" 
        name="tittle" 
        className="form-control mb-3 rounded-0 shodown-none border-0"
        onChange={handleInPutChange}
        value={task.tittle}
        />

        <textarea 
        name="description" 
        rows={2} 
        placeholder="Write a description" 
        className="form-control mb-3 shadow-none border-0"
        onChange={handleInPutChange}
        value={task.description}
        ></textarea>

        <button className="btn btn-success">Save <CiSquarePlus /></button>

      </form>
    </div>
  )
}
