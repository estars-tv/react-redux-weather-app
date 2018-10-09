import React, {Component} from 'react';
import HistoryDay from '../components/history-day';

export default class History extends Component {
    render() {
        const history = this.props.history;

        // (<div>{items.map(item => <div>{item}</div>)}</div>)

        return (
            <div className='history'>
                {history.map(item => <HistoryDay city={item.city} temp={item.temp}/>)}
            </div>
        )
    }
}