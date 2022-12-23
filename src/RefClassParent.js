// Ref parent component - Refclass.js
import React, { Component } from 'react'
import RefClass from './RefClass.js'
export class RefClassParent extends Component {
    constructor(props) {
      super(props)
      this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
      <RefClass ref={this.componentRef}/> <br/>
        <button onClick={this.clickHandler}> Focus Input </button>
      </div>
    )
  }
}

export default RefClassParent