// if-else

import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    if(this.state.isLoggedIn){
        return (
            <div> Welcome Aspire </div>
        )
    }
    else {
        return (
            <div> Welcome Guest </div>
        )
    }
   
  }
}

export default ConditionalRendering