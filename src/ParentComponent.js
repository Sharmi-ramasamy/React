// Composition example 2
// in inheritance child class is extended to parent class

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"I'm a Message from parent class"
      }
    }
    clickMe() {
      console.log('Action occurs in child component from parent component');
    }
  render() {
    return (
      <div>
        <ChildComponent message={this.state.message} clickMe={this.clickMe}/>
      </div>
    )
  }
}

export default ParentComponent