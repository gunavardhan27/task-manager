import Image from '../assets/no-projects.png'
import Button from './Button'
export default function NoProject({handle}){
    return (
        <div style={{backgroundColor:'whitesmoke',borderRadius:'2px black'}}>
            <img style={{height:'160px',width:'220px',marginBottom:'20px',alignItems:'center',marginLeft:'130px'}} src={Image}/>
            <h1 style={{fontWeight:'bolder',textAlign:'center',fontSize:'26px',marginBottom:'15px'}}>No Project</h1>

            <p style={{textAlign:'center',fontSize:'17px'}}>select a project or create a new Project</p>
            <Button fun={handle}>Create new one</Button>
        </div>
    )
}