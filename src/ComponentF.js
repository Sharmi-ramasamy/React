import React, { Component } from 'react'
import { UserConsumer } from './UserContext'


export class ComponentF extends Component {
  render() {
    return (
      
<UserConsumer>
  {
  (username,number) =>{
      return (
      <div> Hello {username} <br/>
         I'm {number}
      </div>
      )
  }
  }
</UserConsumer>

    )
  }
}

export default ComponentF