import React, { Component } from 'react'

export class Clock2 extends Component {
  render() {
    return (
      <div>
        <h2> Tik Tik: {this.props.date.toLocaleTimeString()}.</h2>
          </div>
    )
  }
}
function tick() {
}

setInterval(tick, 1000);



export default Clock2


