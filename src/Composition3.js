import React, { Component } from 'react'
 import {Composition1} from './Composition1'
 import Composition2 from './Composition2'
export class Composition3 extends Component {
  render() {
    return (
      <div>
        <Composition1 message={'Custom Heading for Composition2'}/>
      </div>
    )
  }
}

export default Composition3