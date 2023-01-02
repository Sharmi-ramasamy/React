import React,{useState} from 'react'

export default function Testing() {
  
        const[counter,setCounter]=useState(0)

    const incrementCounter=()=>{
        setCounter((prevCounter)=>prevCounter+1)
    }  
    
    const decrementCounter=()=> {
        setCounter((prevCounter)=>prevCounter-1)
    }

    return (
        <React.Fragment>
            <button data-testid='increment' onClick={incrementCounter}> + </button>
            <p data-testid='counter'> {counter} </p>
            <button disabled data-testid='decrement' onClick={decrementCounter}></button>
        </React.Fragment>
    )
    }

