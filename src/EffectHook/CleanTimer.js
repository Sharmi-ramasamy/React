import React,{useState,useEffect} from 'react'

export default function CleanTimer() {
const[count,setCount]=useState(0)

useEffect(()=>{
  let timer=setTimeout(()=>{
    setCount((count)=>count+1)
  },1000)
  return()=> clearTimeout(timer)
},[])

  return (
    <>
      <h3> <strong> Using Effect Cleanup </strong></h3>
      <h3> Count: {count} </h3>
    </>
  )
}
