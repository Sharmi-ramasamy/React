import React, { Component } from 'react'


export class LifecycleUpdateB extends Component {
    constructor(props) {
      super(props)

    //   console.log('LifeCycleUpdateB Constructor');
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleB getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate() {
        console.log('LifecycleUpdateB shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleUpdateB getSnapShotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleUpdateB componentDidUpdate');
    }


  render() {
    return (
      <div>
        <h3>  LifecycleUpdateB </h3>
        </div>
    )
  }
}

export default LifecycleUpdateB