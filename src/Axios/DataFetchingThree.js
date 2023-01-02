import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function DataFetchingThree() {
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[idFromButtonClick,setIdFromButtonClick]=useState(1)

    const handleClick=()=>{
        setIdFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[idFromButtonClick])
    
  return (
    <div>
        <input type='text' value={id} onChange={event=>setId(event.target.value)} /> 
        <button type='button' onClick={handleClick}> fetch Post </button>
        <div> {post.title} </div>
    </div>
  )
}



