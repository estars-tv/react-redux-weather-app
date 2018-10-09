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
            loading = this.props.weather.loading;

        return (
            <div className='background'>
                <div className='container'>
                    <Search loading={loading} actions={actions} errorLabel={errorLabel}/>
                    <Widget loading={loading} />
                    <Loader loading={loading}/>
                    <History/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
