// Uncontrolled Components

import React, { Component } from 'react'

export class Forms2 extends Component {
    constructor(props) {
      super(props)
     this.handleSubmit = this.handleSubmit.bind(this);       // constructor binding
      this.input = React.createRef();
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
      }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <h4> Uncontrolled Form </h4>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label><br/><br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Forms2