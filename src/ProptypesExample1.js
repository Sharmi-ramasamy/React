import React from 'react'
import PropTypes from 'prop-types'

export function ProptypesExample1({name}) {
  return (
    <div>
        <p> Hi,{name}</p>
    </div>
  )
}
  ProptypesExample1.propTypes = {
    name: PropTypes.string
  }


export default ProptypesExample1