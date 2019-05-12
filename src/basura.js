import React, { Component } from 'react';
import './basura.css';

import audio from './assets/audio/sound.ogg';

class Basura extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.state = { play: false }
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

    componentDidMount() {
        this.audioRef.current.currentTime = 0;
        this.audioRef.current.play();
    }

    render() {
        return (
            <React.Fragment>
                <audio
                    src={audio}
                    loop={true}
                    ref={this.audioRef}></audio>
                <div className="App2 Basura">
                    <div className="black"></div>
                    <div className="App1"></div>
                    <a href="/InsideBasura">
                        <div className="image"></div></a>
                    <div>
                        <img src="/static/media/music.9226b6e5.png"
                            class="music"
                            id="music"
                            onClick={() => this.playAudio(this.audioRef)} />
                    </div>
                    <div>
                        <a href="/">
                            <img src="/static/media/3.a8712964.png" class="exit" id="exit" />
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Basura;