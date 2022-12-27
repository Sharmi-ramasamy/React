import React,{useState,useEffect} from 'react'


export default function Counter() {
    const[count,setCount]=useState(0)
    const[calculation,setCalculation]=useState(0)

    useEffect(()=>{
        setCalculation(()=>count*2)
        },[count])
    
  return (
    <div>
        <h3> <em> On updatation: </em></h3>
        <p> Count is: {count} </p>
        <button onClick={()=>{setCount((counts)=>counts+1)}}> + </button>
        <p> Calculation: {calculation} </p>
    </div>
  )
}
