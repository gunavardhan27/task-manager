import { forwardRef } from "react"
const Input = forwardRef(function Input({isTextArea,label,...props},ref){
    return (
        <div className="mt-2 flex flex-col items-start justify-center">
            <label>{label}</label>
            {isTextArea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props}/>}
        </div>
    )
})
export default Input