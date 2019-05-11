import React, { Component } from 'react';
import background from './assets/InsideBasura/InsideBasura_Desktop.png';
import basuraMobile from './assets/InsideBasura/InsideBasura_Mobile.png';
import './basura.css';
var once=true;
class InsideBasura extends Component {
  
    render() {
        return (
            <React.Fragment>
                <div className="App2">
        
                <div className="black" style={{height:"100vh"}}></div>
                <div >
                <img
                    className="insidebasura"
                    src={ window.screen.width > 560 ? background:basuraMobile} />
                </div>
              
                </div>
            </React.Fragment>
        )
    }
}

export default InsideBasura;