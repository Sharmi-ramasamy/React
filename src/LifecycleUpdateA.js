import React, { Component } from 'react'
import LifecycleMountB from './LifecycleMountB';

export class LifecycleUpdateA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'abc'
      }
      console.log('LifeCycleUpdateA Constructor');
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    shouldComponentUpdate() {
        console.log('LifecycleUpdateA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleUpdateA getSnapShotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleUpdateA componentDidUpdate');
    }

    changeState=()=>{
        this.setState({
            name:'MS'
        })
    }

  render() {
    return (
        <div>
        <h3>  LifeCycleUpdateA </h3>
        <button onClick={this.changeState}> Change state </button>
        <LifecycleMountB/>
        </div>
    )
  }
}

export default LifecycleUpdateA