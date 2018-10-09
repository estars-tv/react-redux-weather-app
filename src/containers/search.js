import React, {Component} from 'react'
import ErrorLabel from '../components/error-label';

export default class Search extends Component {
    render() {
        const actions = this.props.actions,
            error = this.props.errorLabel;

        return (
            <div className='search-container'>
                <input type='text'/>
                <button onClick={() => {
                    actions.getWeather('Moscow');
                }}>Найти
                </button>

                <ErrorLabel error={error}/>
            </div>
        )
    }
}