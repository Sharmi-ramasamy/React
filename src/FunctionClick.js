// Handling Events 

import React from 'react'

export default function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked, I am working ')
    }
    let MyEvent=()=>console.log('I am working from arrow function');
    return (
        <div>
            <div> Function Click- Event handler</div><br/>
            <button onClick={clickHandler}> Click </button> <br/><br/>
            <button onClick={MyEvent}> ArrowEvent </button>
        </div>
    )
}

