import React, {Component} from 'react';

export default class HistoryDay extends Component {
    render() {
        const datetime = this.props.datetime,
            city = this.props.city,
            temp = this.props.temp;

        return (<div className='day'>
            <p className='city'>{city}</p>
            <p>{temp} c</p>
            <p className='datetime'>{datetime}</p>
        </div>)
    }
}