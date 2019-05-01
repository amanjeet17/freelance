import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sample from './rain.mp4';
import kiosk from './assets/kiosk/kiosk_desktop.png';
import ReactAudioPlayer from 'react-audio-player';
import close from './assets/kiosk/3.png';

class Kiosk extends Component {


  render() {
    return (
      <div className="App">
        <img src={kiosk} className="kiosk" />
        <img src={close} className="close-kiosk" />
      </div>
    );
  }
}

export default Kiosk;
