import React,{Component} from 'react'

export class Task extends Component {
    constructor() {
        super()
        this.state= {
            name:"",
            // flag:true
        }
        
    }
    change(event){
        this.setState({
            name:event.target.value
        }
            )
    }

    // changeClick() {
    //     console.log('True');
    // }
   
    // change() {
    //     console.log('False');
    // }
    render() {
        return (
            <div>
            <p> Enter your name:{this.state.name} </p><input onChange={(event)=>(this.change(event))}/>
            {/* <button onClick={this.changeClick}> Yes </button>
            <button onClick={this.change}> No  </button> */}
            </div>
        )
    }
}

export default Task