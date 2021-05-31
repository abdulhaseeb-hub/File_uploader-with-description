import React from 'react'
import {FaTimes} from 'react-icons/fa'



const Tasks = ({task,onDelete}) => {
    

    return (
        <div className="task" >

        <h3>{task.title}<FaTimes style={{color:'red', cursor:"pointer"}}  
            onClick={() => onDelete(task.id)} /> </h3> 

            
        </div>
    )
}

export default Tasks
