import React, { Component } from 'react';
import './App.css';
import './kiosk.css';
import sample from './rain.mp4';
import kiosk from './assets/kiosk/kiosk_desktop.png';
import kioskMobile from './assets/kiosk/kiosk_mobile.png';
import ReactAudioPlayer from 'react-audio-player';
import close from './assets/kiosk/3.png';

class Kiosk extends Component {


  render() {
    return (
      <div className="App">
        <img 
          src={window.screen.width > 560 ? kiosk : kioskMobile} 
          className="kiosk" />
        <img src={close} className="close-kiosk" />
      </div>
    );
  }
}

export default Kiosk;
