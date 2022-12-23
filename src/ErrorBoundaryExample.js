import React from 'react'

export default function ErrorBoundaryExample(props) {
    if (props.name==='abc') {
        throw new Error('Not a name')
    }
  return (
    <div>
        <h3> Error Boundary </h3>
        <strong> {props.name} </strong>
    </div>
  )
}
