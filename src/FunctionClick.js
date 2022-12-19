// Handling Events 

import React from 'react'

export default function FunctionClick() {
    function clickHandler() {
        console.log('Button clicked')
    }
    return (
        <div>
            <div> Function Click- Event handler</div>
            <button onClick={clickHandler}> Click </button>
        </div>
    )
}

