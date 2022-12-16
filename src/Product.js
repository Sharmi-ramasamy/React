// class component

import React, { Component } from 'react'

export class  Product  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
  
      }
    }
  render() {
    return (
      <div> Product {this.props.name} it costs of {this.props.price}</div>
// React.createElement('div',null,React.createElement('h1',null,'Product'))
    )
  }
}


// export class Product extends Component {
//   render() {
//     return (
//       <h2> Hi </h2>
//     )
//   }
// }

export default  Product 


