import ProjectSideBar from "./components/ProjectSideBar/ProjectSideBar";
import NewProject from "./components/NewProject";
//import { v4 as uuidv4 } from 'uuid';
import NoProject from "./components/NoProject";
import SelectedProject from "./components/selectedProject";
import { useState } from "react";
import './app.css'
function App() {
 
  const [noProject,setNewProject] = useState({
    projectId:undefined,
    projects:[],
    tasks:[]
  })

  function addTask(val){
       
    setNewProject(prev=>{
        const index = Math.random()
        const content = val
        const newTask = {
            id:index,
            projectId:prev.projectId,
            data:content
        }
        return {
            ...prev,
            tasks:[newTask,...prev.tasks]
        }
    })
    //inputData.current.value=''
}

function deleteTask(val){
  setNewProject(prev=>{
    return {
      ...prev,
      tasks:prev.tasks.filter(d=> {  return (d.id !== val) }),
    }
  })
}


  function handleChange(){
    setNewProject(prev=>{
      return {
      ...prev,
      projectId:null
  }})
  }
  function selectProject(id){
    setNewProject(prev=>{
      return {
      ...prev,
      projectId:id
       }}) }
  function addProject(projectData){
    setNewProject(prev=>{
      const newProject = {
        ...projectData,
        id:Math.random()
      }
      return {
        ...prev,
        projectId:undefined,
        projects:[...prev.projects,newProject]
      }
    })
  }
  function deleteProject(){
    setNewProject(prev=>{
      return {
        ...prev,
        projectId:undefined,
        projects:prev.projects.filter(project=>project.id !== prev.projectId)

      }
    })
  }
  //console.log(noProject.projects)
  const selectedProject = noProject.projects.find(project=>project.id === noProject.projectId)
  let content = <SelectedProject project={selectedProject} click={deleteProject} 
  addNewTask={addTask}
  deleteATask={deleteTask}
  data={noProject.tasks}
  />
  if(noProject.projectId===null){
    content=<NewProject handle={addProject}  />
  }
  else if(noProject.projectId===undefined){
    content=<NoProject  handle={handleChange} />
  }
  return (
    <div className="main-page">
    <div className='sidebar'> 
      <ProjectSideBar handle={handleChange} projects={noProject.projects} handleSelect={selectProject} />
      
    </div>
    <div>
      {content}
    </div>
    
    </div>
    
  );
}

export default App;
