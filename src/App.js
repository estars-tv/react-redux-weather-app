import React, {Component} from 'react';
import Search from './containers/search';
import History from './containers/history';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import './styles/main.css';
import Widget from './components/widget';
import Loader from './components/loader';
import {DEFAULT_CITY} from './constants/api';

class App extends Component {
    componentWillMount() {
        const actions = this.props.actions;

        actions.getWeather(DEFAULT_CITY);
    }

    render() {
        const actions = this.props.actions,
            errorLabel = this.props.weather.errorLabel,
            loading = this.props.weather.loading,
            currentWeather = this.props.weather.currentWeather,
            temp = currentWeather ? currentWeather.main.temp : null,
            city = currentWeather ? currentWeather.name : null,
            datetime = function () {
                if (currentWeather && currentWeather.dt) {
                    const date = new Date(currentWeather.dt * 1000),
                        year = date.getFullYear(),
                        month = date.getMonth() + 1,
                        day = date.getDate(),
                        hours = date.getHours(),
                        minutes = `0${date.getMinutes()}`,
                        seconds = `0${date.getSeconds()}`;

                    return `${day}.${month}.${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
                } else {
                    return null;
                }
            },
            history = this.props.history;

        return (
            <div className='background'>
                <div className='container'>
                    <Search loading={loading} actions={actions} errorLabel={errorLabel}/>
                    <Widget loading={loading} temp={temp} city={city} datetime={datetime()}/>
                    <Loader loading={loading}/>
                    <History history={history}/>
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
