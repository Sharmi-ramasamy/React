import React, { Component } from 'react'

export class Car extends Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

export class Garage extends Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
      </div>
    );
  }
}

// export default Car
export default Garage