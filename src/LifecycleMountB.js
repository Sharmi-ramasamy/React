import React, { Component } from 'react'

class LifecycleMountB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Lifecycle methods in class component'
      }
      console.log('LifecycleB constructor ');
    }
    static getDerivedStateFromProps(props,state) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null
    }
    componentDidMount() {
        console. log('LifecycleB componentDidMount')
    }
  render() {
    console.log('LifecycleA rendered');
    return 
      <div>LifecycleMountB</div>
    
  }
}

export default LifecycleMountB