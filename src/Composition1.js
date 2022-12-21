import React, { Component } from 'react'
// import Composition2 from './Composition1.js'
// import Composition3 from './Composition3.js'
import PropType from 'prop-types';

export class Composition1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <div>
        <h1> {this.props.message} </h1>
      </div>
    )
  }
}
Composition1.propType={
    message:PropType.string

}
Composition1.defaultProps={
    message:'Heading One Default'
  
}

export default Composition1

