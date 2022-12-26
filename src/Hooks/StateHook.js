import React,{useState} from 'react'

export default function StateHook() {
    const[count,setCount]=useState(0)
    return(
        <div>
            <h3> Using State Hook </h3>
            <button onClick={()=>setCount(count+1)}> Count: {count} </button>
        </div>
    )
}