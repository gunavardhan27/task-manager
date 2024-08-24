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
        <div className="bg-slate-600 p-4 flex-col items-left justify-between gap-3 w-full">
            <div className="flex flex-row items-start justify-between">
            <button className="bg-blue-500 p-2 rounded-md" onClick={handleInput}>Save</button>
            <button className="bg-red-700 p-2 rounded-md">Cancel</button>
            </div>
            <Input type='text' ref={title} label='title' />
            <Input ref={description} label='description' isTextArea={true} />
            <Input type='date' ref={dueDate} label='due-date' />
        </div>
        </>
    )
}