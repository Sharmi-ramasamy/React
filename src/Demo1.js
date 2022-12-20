


import React, { Component } from 'react'

export class Demo1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         age:357
      }
    }
  render() {
    return (
      <div>demo{this.props.name}{this.state.age}</div>
    )
  }
}

export default Demo1