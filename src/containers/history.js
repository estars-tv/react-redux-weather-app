import React, {Component} from 'react';
import HistoryDay from '../components/history-day';

export default class History extends Component {
    render() {
        const history = this.props.history;

        return (
            <div className='history'>
                {history.map(item => <HistoryDay city={item.city} temp={item.temp}/>)}
            </div>
        )
    }
}