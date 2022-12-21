import React, { Component } from 'react'
import LiftingStateup from './LiftingStateup';

export class LiftingStateup2 extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {speed: ''};
  }
  
    handleChange(event) {
    this.setState({
        speed: event.target.value
    });
  }
  
    render() {
    const speed = this.state.speed;
  
    return (
      <div>
        <h3> Lifting State Up </h3>
        <fieldset>
          <legend>Enter speed in kilometer per hour:</legend>
          <label> Enter Speed in km: </label>
          <input value={speed} onChange={this.handleChange} />
        <LiftingStateup kmph={parseFloat(speed)} />
      </fieldset>
      </div>

      );
    }
  }

export default LiftingStateup2