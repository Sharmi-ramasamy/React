// Handling Events

import React,{Component} from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log('Button is clicked, Class method working');
        console.log(this); 
    }
    render() {
        return(
            <div>
                <div> Class Click- Event handler</div> <br/>
            <button onClick={this.clickHandler.bind(this)}> Click Here </button>
            </div>
        )
    }
}

export default ClassClick