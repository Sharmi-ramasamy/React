// Requiring Single Child
// With PropTypes.element you can specify that only a single child can be passed to a component as children.

import React from 'react'
import PropTypes from 'prop-types';

class ProptypesExample2 extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    // const children = this.props.children;
    return (
      <div>
        <h3> Requiring Single Child </h3>
        {this.props.children}
      </div>
    );
  }
}

ProptypesExample2.propTypes = {
  children: PropTypes.element.isRequired
};

export default ProptypesExample2