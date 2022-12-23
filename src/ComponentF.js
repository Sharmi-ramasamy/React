import React, { Component } from 'react'
import { UserConsumer } from './UserContext'


export class ComponentF extends Component {
  render() {
    return (
      
<UserConsumer>
  {
  (username) =>{
      return (
      <div> 
        <strong> Using Context </strong>
        <p> Hello {username[0].a} <br/>
         I'm {username[0].b} </p>
      </div>
      )
  }
  }
</UserConsumer>

    )
  }
}

export default ComponentF