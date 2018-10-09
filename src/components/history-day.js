import React, {Component} from 'react'

export default class HistoryDay extends Component {
    render() {
        const datetime = this.props.datetime,
            city = this.props.city,
            temp = this.props.temp;

        return (<div className='day'>
            {/*<p>{datetime}</p>*/}
            <p className='city'>{city}</p>
            <p>{temp} c</p>
        </div>)
    }
}