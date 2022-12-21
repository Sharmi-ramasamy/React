import React, { Component } from 'react'

export class ChildComponent extends Component {
  
  render() {
        // const {message} = this.props;
    return (
      <div>
        <p>
            Message in Child Component: <b> {this.props.message} </b>
        </p>
            <button onClick={this.props.clickMe}> Click Me! </button>
      </div>
    )
  }
}

export default ChildComponent