import React from 'react'
import {useState,useEffect} from 'react'

export default function Timer() {
    const[count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000)
    },[])
  return (
    <div>
        <h3> <em> Effect Hook using function and Dependency: </em> </h3>
        <h4> The count is {count} </h4>
    </div>
  )
}
