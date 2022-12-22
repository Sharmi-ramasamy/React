// Default Prop Values in class component
// You can define default values for your props by assigning to the  defaultProps property:

import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ProptypesExample3 extends Component {
  render() {
    return (
      <div>
        <h3> Default Prop values in class component </h3>
        <h2> Hello,{this.props.name} </h2>

      </div>
    )
  }
}

ProptypesExample3.propTypes={
    name:PropTypes.string
};
ProptypesExample3.defaultProps = {
    // name:54     ---------- throws error because number is given instead of string
    name:'Stranger'
  };

export default ProptypesExample3