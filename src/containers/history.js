import React, {Component} from 'react';
import HistoryDay from '../components/history-day';

export default class History extends Component {
    render() {
        const history = this.props.history,
            datetime = this.props.datetime;

        return (
            <div className='history'>
                {history.map((item, i) => <HistoryDay key={i} city={item.city} temp={item.temp} datetime={datetime}/>)}
            </div>
        )
    }
}