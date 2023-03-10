import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function DataFetchingOne() {
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            setPosts(res.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    
  return (
    <div>
        <ul>
        {
        posts.map(post =>(
            <li key={post.id}> {post.title} </li>
        ))}
        </ul>
    </div>
  )
}



// To print in console and in webpage
// adding dependencies