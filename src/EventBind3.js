// Arrow function in render()
// while using arrow function in render(). no need of bind(this)

import React, { Component } from 'react'

export class EventBind3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:"React"
      }
    }
    changeHandler() {
        this.setState({
            message:"REACTJS..."
        })
    }
  render() {
    return (
        <div>
      <div> Arrow function in render method </div>
      <div> {this.state.message} </div>
      <button onClick={()=>{this.changeHandler()}}> Click </button>              
      </div>
    )
  }
}

export default EventBind3