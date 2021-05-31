import React,{useState} from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import Task from './components/Task'


const App = ({title}) => {

  const [tasks,setTasks] = useState([

 


  ]);

  const deleteTask = (id) =>{
    
    setTasks(tasks.filter((task)=> task.id !== id))

  }

  
  
  
  const addTask = (task) =>{
  
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
  
  }
  return (
  <>

<div className='header'>
            
  <div className='container mt-4'>
            <h2>{title}     </h2>
    

    <FileUpload addTask={addTask} />
    <Task tasks={tasks} onDelete={deleteTask}/>
  </div>

  </div>


  </>
  )
};

App.defaultProps = {

  title:'File Chooser',

}

export default App;
