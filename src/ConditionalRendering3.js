// Ternary Conditional Operator - makes the code simple and more readable

import React, { Component } from 'react'

export class ConditionalRendering3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {
    return (
      
        this.state.isLoggedIn ? 
        (<div> Welcome Aspire </div>) :
        (<div> Welcome Guest </div>)
    
    )
  }
}

export default ConditionalRendering3