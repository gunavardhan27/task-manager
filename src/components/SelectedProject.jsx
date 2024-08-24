import Button from "./Button"
import Tasks from "./Tasks"
export default function SelectedProject({project,click,addNewTask,deleteATask,data}){
    console.log(project)
    return (

        <div className="bg-slate-300 p-4 flex-col items-left justify-between gap-3 w-full">
            <button onClick={click} className="bg-red-800 p-2 rounded-md">Delete</button>
            <h1>title: {project.title}</h1>
            <h3>description: {project.description}</h3>

            <p>dueDate: = {project.dueDate}</p>
            <h1>TASKS:</h1>
            <Tasks addNewTaskHere={addNewTask} onDelete={deleteATask} content={data} />
        </div>
    )
}