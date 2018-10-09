import React, {Component} from 'react';
import Search from './containers/search';
import History from './containers/history';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import './styles/main.css';
import Widget from './components/widget';
import Loader from './components/loader';
import {DEFAULT_CITY, WEATHER} from './constants/api';
import getDateTime from './utils';

class App extends Component {
    componentDidMount() {
        const actions = this.props.actions;

        actions.getWeather(DEFAULT_CITY);
    }

    componentDidUpdate() {
        const weatherType = this.props.weather.weatherType;

        window.changeWeather({type: WEATHER[weatherType.toUpperCase()]});
    }

    render() {
        const actions = this.props.actions,
            errorLabel = this.props.weather.errorLabel,
            loading = this.props.weather.loading,
            currentWeather = this.props.weather.currentWeather,
            temp = currentWeather ? currentWeather.main.temp : null,
            city = currentWeather ? currentWeather.name : null,
            datetime = currentWeather ? getDateTime(currentWeather.dt) : null,
            history = this.props.history;

        return (
            <div className='background'>
                <div className='container'>
                    <Search loading={loading} actions={actions} errorLabel={errorLabel}/>
                    <Widget loading={loading} temp={temp} city={city} datetime={datetime}/>
                    <Loader loading={loading}/>
                    <History history={history} datetime={datetime}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather,
        history: state.history
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
