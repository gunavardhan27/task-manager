import {forwardRef,useState} from 'react'
//import Task from './Task'
const NewTask = function NewTask({addTask}){
    const [val,set] = useState('')
    function change(){
        //event.preventDefault()
        addTask(val)
    }
    function handle(event){
        set(event.target.value)
        
    }
    return (
        <>
        <input type="text" onChange={handle}/>
        <button onClick={change}>ADD TASK</button>
            
        </>
    )
}

export default NewTask