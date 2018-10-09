import React, {Component} from 'react';
import Search from './containers/search';
import History from './containers/history';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import './styles/main.css';
import Widget from './components/widget';
import Loader from './components/loader';

class App extends Component {
    render() {
        const actions = this.props.actions,
            errorLabel = this.props.weather.errorLabel,
            loading = this.props.weather.loading;

        return (
            <div className='background'>
                <div className='container'>
                    <Search actions={actions} errorLabel={errorLabel}/>
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
