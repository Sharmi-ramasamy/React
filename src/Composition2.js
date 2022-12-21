import React, { Component } from 'react'
import Composition1 from './Composition1'
import Composition3 from './Composition3'

export class Composition2 extends Component {
  render() {
    return (
      <div>
        <Composition1 message={'Custom Heading for composition1'}/>

      </div>
    )
  }
}

export default Composition2