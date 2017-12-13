import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import history from './history';
import store from '../store/combinedReducers';
import Navbar from './navBar.js';

export default class Routes extends Component {
    constructor () {
        super ();
    }

    render () {
        return (
            <Router history={history}>
                <Switch>
                    <Route component={Navbar} />
                </Switch>
            </Router>
        )
    }
}