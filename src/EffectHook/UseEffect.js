import React from 'react'
import { useEffect,useState } from 'react'


function UseEffect() {
    const[color,setColor]=useState("Green")

useEffect(() => {
    setInterval(()=>setColor("Pink"),2000)
})

// useEffect(() => {
//     setColor("Pink")
// })

  return (
    <div>the colour is {color}</div>
  )
}

export default UseEffect