// Type checking with proptypes
 
import React,{Component} from 'react'
import PropTypes from 'prop-types'

export class ProptypesExample extends Component {
    render() {
        return(
            <div>
                <h3> Typechecking with PropTypes </h3>
                <p> Hello, {this.props.name} </p>
            </div>
        )
    }
}
ProptypesExample.propTypes={
    name:PropTypes.string
};

export default ProptypesExample