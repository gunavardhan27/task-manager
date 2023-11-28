import './projectSideBar.css'
import Button from '../Button'
export default function ProjectSideBar({handle,projects,handleSelect}){
    //console.log(projects)
    return (
        <aside>
            <h1 style={{fontSize:'25px',marginBottom:'10px'}}>Your Projects</h1>
            
            <Button fun=
            {handle} className='myButton'>
                + Add Project
            </Button>
            <div className='div'>
                <ul>
                {projects.map((project)=>{
                    return (
                    <li key={project.id} onClick={()=>handleSelect(project.id)}>{project.title}</li>
                    )
                })}
                </ul>
            </div>
        </aside>
    )
}