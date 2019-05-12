import React, { Component } from 'react';
import background from './assets/store/future.png';
import './basura.css';

import audio from './assets/audio/sound.ogg';


class Future extends Component {
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
                <div className="App1 Future">
                    <div className="container">
                        <img
                            className="logo"
                            src={background} />
                    </div>
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

export default Future;