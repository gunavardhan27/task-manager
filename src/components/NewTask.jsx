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
        <div className='bg-slate-400 p-4 m-2'>
        <input type="text" onChange={handle}/>
        <button onClick={change}>ADD TASK</button>
            
        </div>
    )
}

export default NewTask