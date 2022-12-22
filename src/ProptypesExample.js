// Type checking with proptypes
 
import React,{Component} from 'react'
import PropTypes from 'prop-types'

export class ProptypesExample extends Component {
    render() {
        return(
            <div>
                <h3> Typechecking with PropTypes in class component </h3>
                <p> Hello, {this.props.name} </p>
                <p> Age is: {this.props.age} </p>
            </div>
        )
    }
}
ProptypesExample.propTypes={
    name:PropTypes.string
};
ProptypesExample.propTypes={
    age:PropTypes.number
};

export default ProptypesExample