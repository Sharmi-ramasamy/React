import React, { Component } from 'react'

export class ClassState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
      }
    }

    incrementCount() {
        this.setState({
            count:this.state.count+1
            })
      }
    
  render() {
    return (
      <div>
        <h3> Using Class Component </h3>
        <button onClick={this.incrementCount.bind(this)}> Count: {this.state.count} </button>   
        {/* render binding*/}
        </div>
    )
  }
}

export default ClassState




















// import React,{Component} from 'react'

// export class ClassState extends Component {
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//         this.myClick=this.myClick.bind(this)    // constructor binding
//     }
//     myClick() {
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     render(){
//         return(
//             <div> 
//                 <button onClick={this.myClick}> Count: {this.state.count}</button>
//             </div>
//         )
//     }

// }



// export default ClassState


// import React,{Component} from 'react'

// export class ClassState extends Component {
//     constructor() {
//         super()
//         this.state={
//             count:0
//         }
//     }
//     clickCount=()=>{
//         this.setState({
//             count:this.state.count+1                                // Binding with arrow function
//         })
//     }
//     render() {
//         return(
//             <div>
//                 <button onClick={this.clickCount}> Count: {this.state.count} </button>
//             </div>
//         )
//     }
// }


// export default ClassState



// import React,{Component} from 'react'

// export class ClassState extends Component {
//     constructor() {
//         super()
//         this.state={
//             count:0
//         }
//     }
//     clickCount(){
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     render() {
//         return(
//             <div>
//                 <button onClick={()=>{this.clickCount()}}> Count: {this.state.count} </button>           // arrow rendering
//             </div>
//         )
//     }
// }




// export default ClassState







