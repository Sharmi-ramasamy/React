// Default Prop Values in function component

import React from 'react'
import PropTypes from 'prop-types'

export default function ProptypesExample4({name,time}) {
  return (
    <div>
        <h3> functional component with default prop values </h3>
        <p>
        Welcome,{name} <br/><br/>
        It is <strong> {time} </strong> pm now.
        </p>
    </div>
  )
}

ProptypesExample4.propTypes={
    name:PropTypes.string
}
ProptypesExample4.propTypes={
    time:ProptypesExample4.number
}

ProptypesExample4.defaultProps={
  name:'Sir',
  // time:10,
}
ProptypesExample4.defaultProps={
  // name:'Sir',
  time:10,
}
