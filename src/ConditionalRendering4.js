// Short circuit operator
// to render something or nothing 

import React, { Component } from 'react'

export class ConditionalRendering4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    return (
       this.state.isLoggedIn && <div> Welcome Aspire </div>
    )
  }
}

export default ConditionalRendering4
