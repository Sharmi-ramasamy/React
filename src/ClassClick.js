// Handling Events

import React,{Component} from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log('Button is clicked');
    }
    render() {
        return(
            <div>
                <div> Class Click- Event handler</div>
            <button onClick={this.clickHandler}> Click Here </button>
            </div>
        )
    }
}

export default ClassClick