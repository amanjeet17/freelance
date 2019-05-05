import React, { Component } from 'react';

import './basura.css';

import background from './assets/basura/desktop.png'
import backgroundMobile from './assets/basura/mobile.png'

class Basura extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="black"></div>
                <div className="App1"></div>
                <div className="image">
                    {/* <img
                        className="basuraImage"
                        src={window.screen.width > 560 ? background : backgroundMobile} /> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Basura;