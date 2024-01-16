import { useState } from 'react'
import './App.css'
import logo from './assets/react.svg'
import { Task } from './interfaces/Task'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

interface Props{
  title?: string
}

function App({title}:Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      tittle: "Learn react",
      description: "Lear react with tsc",
      completed: false
    }
  ]);

  const getCureentTimestamp = ():number => new Date().getTime();

  const addANewTask = (task: Task) => setTasks([...tasks, {...task,id: getCureentTimestamp(), completed: false}])

  const deleteATask = (id: number) => setTasks(tasks.filter(task => task.id !== id))

  return (
    <div className="bg-dark text-white" style={{height: '100vh'}}>
      <nav className='navbar navbar-expand-lg bg-primary'>
        <div className='container'>
          <a className='navbar-brand' href="/">
            <img src={logo} alt="React logo" style={{ width: '4rem'}} />
            {title}
          </a>
        </div>

      </nav>
      
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addANewTask={addANewTask}/>
          </div>

          <div className="col-md-8">
            <div className='row'>
              <TaskList  tasks={tasks} deleteATask={deleteATask}/> 
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
