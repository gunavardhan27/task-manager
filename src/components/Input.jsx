import { forwardRef } from "react"
const Input = forwardRef(function Input({isTextArea,label,...props},ref){
    return (
        <div>
            <label>{label}</label>
            {isTextArea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props}/>}
        </div>
    )
})
export default Input