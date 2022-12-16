import React, { Component } from 'react'

export class Color extends Component {
    constructor() {
      super()
    
      this.state = {
         color:'Green'
      }
    }
  render() {
    return (
        <div>
      <h2>  Color: {this.state.color} </h2>
      </div>

    )
  }
}

export default Color