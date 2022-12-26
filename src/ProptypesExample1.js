// typechecking proptypes in functional compnent

import React from 'react'
import PropTypes from 'prop-types'

export function ProptypesExample1({name}) {
  return (
    <div>
      <h3> typechecking proptypes in functional component  </h3>
        <p> Hi,{name}</p>
    </div>
  )
}
  ProptypesExample1.propTypes = {
    name: PropTypes.string
  }


export default ProptypesExample1