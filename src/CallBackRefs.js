// another way of creating ref is call back ref 
// oldest approach to create ref.
import React, { Component } from 'react'

export class CallBackRefs extends Component {
    constructor(props) {
      super(props)
      this.callbackref=null
      this.setcallbackref=(element)=>{
        this.callbackref=element
      }
    }
    componentDidMount() {
        if (this.callbackref) {
            this.callbackref.focus()
        }
    }
    // clickHandler=()=>{
    //     alert(this.inputRef.current.value)
    // }
  render() {
    return (
      <div>
        <h3> REF - Call Back Ref </h3>
        <input type="text" ref={(this.setcallbackref)}/> <br/><br/>
        {/* <button onClick={this.clickHandler}> Click </button> */}
      </div>
    )
  }
}

export default CallBackRefs
