// Element Variables

import React, { Component } from 'react'

export class ConditionalRendering2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() {

    let message                            // message is the variable that stores element that is to be rendered
    if (this.state.isLoggedIn) {
        message= <div> Welcome Aspire </div>
    }
    else {
        message= <div> Welcome Guest </div>
    }
    return <div> {message} </div>
  }
}

export default ConditionalRendering2