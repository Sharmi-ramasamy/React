// Updating object in state hooks

import React,{useState} from 'react'

export default function StateObjectUpdation() {
    const[car,setCar]=useState({
        brand:'Ford',
        year:'1978',
        color:'Black',
    })

    const updateColor=()=> {
        // setCar({color:'White'})
        setCar(previousState=>{
            return {...previousState,color:'White'}
        })
    }

  return (
    <React.Fragment>
        <h2> Updating object in state: </h2>
        {/* <p> Color of car {car.brand} is {car.color} made in year {car.year}</p> */}
       {/* <button onClick={updateColor}> White </button> */}

       <p> Color of car {car.brand} is <strong> {car.color} </strong> made in year {car.year}</p>
       <button onClick={updateColor}> Change Color </button>

    </React.Fragment>
  )
}
