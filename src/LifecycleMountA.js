import React, { Component } from 'react'
import LifecycleMountB from './LifecycleMountB';

class LifecycleMountA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Lifecycle methods in class component'
      }
      console.log('LifecycleA constructor ');
    }
    static getDerivedStateFromProps(props,state) {
    console.log('Lifecycle A getDerivedStateFromProps');
        return null
    }
    componentDidMount() {
     console. log('Lifecycle A componentDidMount')
    }
  render() {
    console.log('LifecycleA rendered');
    return (
      <div>
        <h3>LifecycleMountA</h3>
        <LifecycleMountB/>
        </div>
       
    )
  }
}

export default LifecycleMountA