import {createPortal} from 'react-dom'
import {forwardRef,useImperativeHandle, useRef } from 'react'
const Modal = forwardRef(function Modal({},ref){
    const dailog = useRef()
    useImperativeHandle(ref,()=>{
        return {
        open(){
            dailog.current.showModal()
        }}
    })
    return createPortal(
        <dialog ref={dailog}>
            details anni fill seyara jua
            <form method='dailog'>
            <button>close</button>
            </form>
            
        </dialog>,document.getElementById('modal-root')

    )
})

export default Modal