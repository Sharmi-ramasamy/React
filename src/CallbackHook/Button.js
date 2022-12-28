import React from 'react'

export default function Button(handleClick,children) {
    console.log('Button renders',children);
  return (
    <button onClick={handleClick}> {children} </button>
  )
}
