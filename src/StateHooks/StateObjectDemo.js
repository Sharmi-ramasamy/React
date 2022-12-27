// Instead of using multi state- use single state and include object

import React,{useState} from 'react'

export default function StateObjectDemo() {
    const[car,setCar]=useState({
        brand:'Ford',
        color:'black',
        year:1978,
        madein:'India',
    })
  return (
   <div>
     <h2> single state and objects inside: </h2>
    <h3> The brand is: {car.brand} </h3>
    <p> The {car.color} colored car is made in {car.madein},{car.year} </p>
    {/* <button onClick={()=>setCar({color:'blue'})}>change </button> */}
   </div>
  )
}
