import { useRef,useState } from "react"
import Input from "./Input"
import Modal from "./Modal"
export default function NewProject({handle}){
    const title=useRef()
    const description = useRef()
    const dueDate  = useRef()
    const modal = useRef()
    //const inputData ={title:'',description:'',dueDate:''}
    function handleInput(){
        
        const a = title.current.value
        const b = description.current.value
        const c = dueDate.current.value
        //title.current.value=''
        //description.current.value=''
        //dueDate.current.value=''
        if(a.trim()==='' || b.trim()==='' || c.trim()===''){
            modal.current.open()
            return
        }
        handle({
            title:a,
            description:b,
            dueDate:c
        })
        
    }
    //console.log(inputData)
    
    return (
        <>
        <Modal ref={modal} />
        <div>
            <button onClick={handleInput}>Save</button>
            <button>Cancel</button>
        </div>
        <div>
            <Input type='text' ref={title} label='title' />
            <Input ref={description} label='description' isTextArea={true} />
            <Input type='date' ref={dueDate} label='due-date' />
        </div>
        </>
    )
}