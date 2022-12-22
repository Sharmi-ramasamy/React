import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

export class ForwardRefParent extends Component {
  render() {
    return (
      <div>
        <ForwardRefInput/>
        <button> Focus </button>
      </div>
    )
  }
}

export default ForwardRefParent