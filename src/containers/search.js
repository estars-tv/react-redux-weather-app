import React, {Component} from 'react'
import ErrorLabel from '../components/error-label';

export default class Search extends Component {
    render() {
        const actions = this.props.actions,
            error = this.props.errorLabel,
            loading = this.props.loading;

        return (
            loading ? null :
                <div className='search-container'>
                    <input type="text" ref={(input) => {
                        this.searchInput = input;
                    }}/>
                    <button onClick={() => {
                        actions.getWeather(this.searchInput.value);
                    }}>Найти
                    </button>

                    <ErrorLabel error={error}/>
                </div>
        )
    }
}