// Binding in constructor
import React, { Component } from 'react'

export class EventBind2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"Good Morning"
    }
    this.clickHandler=this.clickHandler.bind(this)

  }
  clickHandler() {
    this.setState({
        message:'Good Evening...!!'
    })
    console.log(this)   
}

  render() {
    return (
      <div> 
      <div> Binding in constructor </div>
      <div> {this.state.message} </div>
      <button onClick={this.clickHandler}> Click </button>
      </div>
    )
  }
}

export default EventBind2