import React,{useState} from 'react'

export default function StateExample() {
    const[color,setColor]=useState('Green')
    return(
        <>
            <h2> My favo color is {color} </h2>
            <p> updating color :{color} </p>
            <button onClick={()=>{setColor('Pink')}}> Pink </button>
        </>
    )
}