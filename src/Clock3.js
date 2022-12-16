// using state instead of props

import React,{Component} from 'react'

export class Clock3 extends Component {
    constructor(props){
        super(props) ;
        this.state={
            date:new Date()
            // date={new Date()};
        }
    }
        render() {
            return (
                <h2> Tik Tik Time is: {this.state.date.toLocaleTimeString()}.</h2>
            )
        }
    }

    function ticks() {
    }
    setInterval(ticks, 1000);
    
export default Clock3