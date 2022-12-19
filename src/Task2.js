import React,{Component} from 'react'

export class Task2 extends Component {
    constructor(){
        super()
        this.state={
            flag:true
        }
    }
    change() {
        console.log('TRUE');
    }
    changeClick() {
        console.log('FALSE');
    }

render() {
    return (
        <div>
            <button onClick={this.change}> YES </button> <br/> <br/>
            <button onClick={this.changeClick}> NO </button>
        </div>
    )
}
}

export default Task2