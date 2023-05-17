import React, { useState } from 'react'
import './birthday.css';
import { json } from 'react-router-dom';

const Task =({title ,desc,ky})=>{
   const delnod=(id)=>{
    
   }
    return (
        <>
<div  className='show'>
   <div>
<h2>Title {title}</h2>

<h3>Description is {desc}</h3>
<button onClick={delnod(ky)}>onclick that</button>
</div>


</div>

        </>
    )
}
const Birth = () => {
    const [title,settitle]=useState("");
    const [desc,setdesc]=useState("");
    // const [task,settask]=useState(localStorage.getItem("daily") ? JSON.parse(localStorage.getItem("daily")):[]);

    const [task,settask]=useState([]);
    const submitHandler=(e)=>{
     e.preventDefault();
     settask([...task,{title,desc}])
     settitle(' ');
    // localStorage.setItem("daily",JSON.stringify(task))
    }
    

    return (
    <>
<div className='container'>
    <form action='' onSubmit={submitHandler}>
    <input type='text' value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Title' ></input>
    <textarea rows='10' value={desc} onChange={(e)=>setdesc(e.target.value)} placeholder='Description Here'></textarea>
    <button type='submit' >Add Goal</button>
    
    </form>

    {
        task.map((value ,index)=>{
            return(
<>

<Task title={value.title} desc={value.desc} ky={index}/>

</>
        )})
    }
</div>
    </>
  )
}

export default Birth


