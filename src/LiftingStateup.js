import React from 'react'

export default function LiftingStateup(props) {
    if (props.kmph <= 80) {
        return <p>You are within the speed limit.</p>;
    }
    else {
        return <p>You are exceeding the speed limit.</p>;
    }
}