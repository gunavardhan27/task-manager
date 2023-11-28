export default function Button({children,fun}){
    return (
        <div>
            <button className="myButton" onClick={fun}>{children}</button>
        </div>
    )
}