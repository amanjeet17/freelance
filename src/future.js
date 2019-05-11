import React, { Component } from 'react';
import background from './assets/store/future.png';
import './basura.css';

class Future extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App1"></div>
                <div className="container">
                <img
                    className="logo"
                    src={background} />
                </div>
            </React.Fragment>
        )
    }
}

export default Future;