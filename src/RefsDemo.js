
import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
  
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <h3> REF </h3>
        <input type="text" ref={(this.inputRef)}/> <br/><br/>
        <button onClick={this.clickHandler}> Click </button>
      </div>
    )
  }
}

export default RefsDemo