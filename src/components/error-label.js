import React, {Component} from 'react'

export default class ErrorLabel extends Component {
    render() {
        const error = this.props.error;

        return (<p className='error'>{error}</p>)
    }
}