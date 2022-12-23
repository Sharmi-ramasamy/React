// Ref in class component
import React, { Component } from 'react'

export class RefClass extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    focusInput() {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <h3> Passing ref to class component </h3>
        <input type="text" ref={this.inputRef}/> 
      </div>
    )
  }
}

export default RefClass