// CounterOne,CounterTwo,useCounter

import React from 'react'
import useCounter from './useCounter'

export default function CounterOne() {
    const[count,increment,decrement,reset]=useCounter(0,5)
  return (
    <div>
      <h2> Custom Hooks 2 </h2>
        <h3> Count - {count}</h3>
        <button onClick={increment}> Increment  </button>
        <button onClick={decrement}> Decrement  </button>
        <button onClick={reset}> Reset  </button>
    </div>
  )
}
