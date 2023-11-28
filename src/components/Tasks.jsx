import NewTask from "./NewTask"

import { useState,useRef } from "react"
import Task from "./Task"
export default function Tasks({addNewTaskHere,onDelete,content}){
    const [tasks,addNew] = useState([])
    const inputData = useRef()
    
   
    console.log(content)
    return (
        <div>
            <NewTask tasks={tasks}  addTask={addNewTaskHere} />
            
            {content.length > 0 ? <ul>{content.map((task)=><li key={task.id}><span>{task.data}</span> <button onClick={()=>onDelete(task.id)}>
                delete</button></li>)}</ul>
                : <p>Add some Tasks</p>}
        </div>
    )
}