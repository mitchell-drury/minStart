import React, {Component} from 'react';
import {Kingdoms} from './kingdoms';

export default class Main extends Component {
    constructor () {
        super ();
    }

    render () {
        return (
            <div>
                <h1> This is the main </h1>
                <Kingdoms />
            </div>
        )
    }
}