import React,{useState} from 'react'

export default function MultiStateExample() {
    const[brand,setBrand]=useState('Ford');
    const[year,setYear]=useState('1978');
    const[color,setColor]=useState('Black');
  return (
    <>
    <h2> Multi state : </h2>
        <h3> The brand of the car is {brand} </h3>
        <p> It is a <strong> {color}  </strong>car from {year} </p>
        <button onClick={()=>{setColor('Blue')}}> Change </button>
    </>
  )
}
