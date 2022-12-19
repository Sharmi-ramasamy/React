// Binding with arrow function
import React, { Component } from 'react'

export class EventBind4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hi"
      }
    }
    clickHandler=() => {
        this.setState({
            message:"Bye"
        })
    }
  render() {
    return (
      <div>
        <div> Binding with arrow function </div>
        <div> {this.state.message} </div>
        <button onClick={this.clickHandler}> Click </button>
      </div>
    )
  }
}

export default EventBind4