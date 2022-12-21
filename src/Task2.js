import React,{Component} from 'react'

export class Task2 extends Component {
    constructor(){
        super()
        this.state={
            flag:""
        }
        this.change = this.change.bind(this)
        this.changeClick = this.changeClick.bind(this)
    }
   
    change() {
        console.log('TRUE');
        this.setState({
            flag:true
        })
        
    }
    changeClick() {
        console.log('FALSE');
        this.setState({
            flag:false
        })
        
    }

render() {
    return (
        <div>
            <button onClick={this.change}>{this.state.flag? 'True':'Yes'}</button> <br/> <br/>
            <button onClick={this.changeClick}> {this.state.flag? 'False':'No'} </button>
        </div>
    )
}
}

export default Task2