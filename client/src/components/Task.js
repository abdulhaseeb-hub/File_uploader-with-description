import React from 'react'
import Tasks from './Tasks'
const Task = ({tasks,onDelete}) => {
    

    return (
        <>
            {tasks.map((task) =>

            

             (
                 
                 <Tasks  key={task.id} task={task} onDelete={onDelete} />
                 
                 ))}
            
        </>
    )
}

export default Task
