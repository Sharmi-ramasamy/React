import React from 'react'

export default function (props) {
  return (
    <div>
    <div> Home {props.name} working at the position of {props.position} {props.children} </div>
    <div> Login </div>
    </div>
  )
}

// convert jsx code to browser understable lamguage/code is done through compiler- babel
