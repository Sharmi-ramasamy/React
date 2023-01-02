import React,{useState} from 'react'
import useCounter from './useCounter'

export default function CounterTwo() {
    const[count,increment,decrement,reset]=useCounter(10,10)
    return (
      <div>
          <h3> Count - {count}</h3>
          <button onClick={increment}> Increment  </button>
          <button onClick={decrement}> Decrement  </button>
          <button onClick={reset}> Reset  </button>
      </div>
    )
  }
  
