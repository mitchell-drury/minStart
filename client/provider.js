import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/combinedReducers.js';
import Routes from './components/routes.js'

ReactDOM.render (
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
)