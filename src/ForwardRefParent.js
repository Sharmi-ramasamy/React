import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

export class ForwardRefParent extends Component {
  constructor(props) {
    super(props)
    this.inputRef=React.createRef()
  }
  clickHandler=()=>{
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <h3> Forwarding Ref </h3>
        <ForwardRefInput ref={this.inputRef}/><br/>
        <button onClick={this.clickHandler}> Focus </button>
      </div>
    )
  }
}

export default ForwardRefParent