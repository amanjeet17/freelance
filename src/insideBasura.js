import React, { Component } from 'react';
import background from './assets/InsideBasura/InsideBasura_Desktop.png';
import basuraMobile from './assets/InsideBasura/InsideBasura_Mobile.png';
import './basura.css';

import audio from './assets/audio/sound.ogg';

class InsideBasura extends Component {

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
                <div className="App2 InsideBasura">

                    <div className="black" style={{ height: "100vh" }}></div>
                    <div >
                        <img
                            className="insidebasura"
                            src={window.screen.width > 560 ? background : basuraMobile} />
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

export default InsideBasura;