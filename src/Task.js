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
            <p data-testid="Name"> Enter your name:{this.state.name} </p>
            <input onChange={(event)=>(this.change(event))}/>
            <input type="text"></input>
            <button  data-testid="click" onClick={this.changeClick}> Yes </button>
            <button disabled data-testid="click2" onClick={this.change}> No  </button>
            </div>
        )
    }
}

export default Task