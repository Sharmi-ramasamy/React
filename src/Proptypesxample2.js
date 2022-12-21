import React from 'react'
import PropTypes from 'prop-types';

class ProptypesExample2 extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

ProptypesExample2.propTypes = {
  children: PropTypes.element.isRequired
};

export default ProptypesExample2