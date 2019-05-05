import React, { Component } from 'react';
import './App.css';
import './kiosk.css';
import sample from './rain.mp4';
import kiosk from './assets/kiosk/kiosk_desktop.png';
import kioskMobile from './assets/kiosk/kiosk_mobile.png';
import ReactAudioPlayer from 'react-audio-player';
import close from './assets/kiosk/3.png';

import audio from './assets/audio/sound.ogg';


class Kiosk extends Component {

  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = { play: true }
  }

  playAudio = (audioref) => {
    if (this.state.play) {
      audioref.current.currentTime = 0;
      audioref.current.play();
    } else {
      audioref.current.pause();
    }
    this.setState((prevState) => ({ play: !prevState.play }));
  }

  render() {
    return (
      <div className="App kiosk">
        <audio
          src={audio}
          loop={true}
          ref={this.audioRef}>
        </audio>
        <img
          src={window.screen.width > 560 ? kiosk : kioskMobile}
          className="kiosk" />
        <img src={close} className="close-kiosk" />
        <div>
          <img
            src="/static/media/music.9226b6e5.png"
            class="music "
            id="music"
            onClick={() => this.playAudio(this.audioRef)} />
        </div>
        <div>
          <a href="/store">
            <img src="/static/media/3.a8712964.png" class="exit" id="exit" />
          </a>
        </div>
      </div>
    );
  }
}

export default Kiosk;
