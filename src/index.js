import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
