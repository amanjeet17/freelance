import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import one from './assets/1.png';
import two from './assets/2.png';
import three from './assets/3.png';
import four from './assets/4.png';
import five from './assets/5.png';
import five1 from './assets/51.png';
import five2 from './assets/52.png';
import five3 from './assets/53.png';
import six from './assets/6.png';
import six1 from './assets/61.png';
import six2 from './assets/62.png';
import music from './assets/music.png';
var once=true;
class App extends Component {

  componentDidMount(){
    var list = document.getElementsByTagName("audio")[0]
    list.classList.add("mystyle")
    // console.log("audios tag",list)
    document.getElementsByClassName('react-audio-player ')[0].loop=true
  }

  soundmute=()=>{
    if(once){
      document.getElementsByClassName('react-audio-player ')[0].muted=true;
      once=false;
    }
    else{
      document.getElementsByClassName('react-audio-player ')[0].muted=false
      once=true;
    }
  }

  click1=(e)=>{
    console.log(e.target);
    // e.target.style.display ="none";
    document.getElementById("five").style.display="none"
    document.getElementById("five1").style.display="inline"
    document.getElementById("six").style.display="inline"

  }

  click2=(e)=>{
    console.log(e.target);
    // e.target.style.display ="none";
    document.getElementById("six").style.display="none"
    document.getElementById("six1").style.display="inline"
  }

  click3=(e)=>{
    console.log(e.target);
    // e.target.style.display ="none";
    document.getElementById("six1").style.display="none";
    document.getElementById("five1").style.display="none";
    document.getElementById("six2").style.display="inline";
    document.getElementById("five2").style.display="inline";
  }

  click4=(e)=>{
    document.getElementById("six2").style.display="none";
    document.getElementById("five2").style.display="none";
    document.getElementById("five3").style.display="inline";
  }

  click5=(e)=>{
    let path = `/store`;
      this.props.history.push("/store")
  }

  render() {
    return (
      <div className="App">
      <ReactAudioPlayer
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        autoPlay
        controls
        ref={(element) => { this.rap = element; }}
      />
    
      <div >
      <img src={one} className="images one" />
      </div>
      <div>
      <img src={two}  className="images two" />
      </div>
      <div>
      <img src={three}  className="images three" />
      </div>
      <div>
      <img src={four} className="images four"  />
      </div>
      <div>
      <img src={five} className="images five" id="five" onClick={this.click1} />
      </div>
      <div>
      <img src={five1} className="images five1"  id="five1" onClick={this.click2}/>
      </div>
      <div>
      <img src={six} className="images six" id="six" onClick={this.click2}/>
      </div>
      <div>
      <img src={six1} className="images six1" id="six1" onClick={this.click3} />
      </div>
      <div>
      <img src={five2} className="images five2" id="five2" onClick={this.click4} />
      </div>
      <div>
      <img src={six2} className="images six2" id="six2" onClick={this.click4}/>
      </div>
      <div>
      <a href="/store">
      <img src={five3} className="images five3" id="five3" />
      </a>
      </div>
      <div>
      <img src={music} className="music " id="music" onClick={this.soundmute}/>
      </div>
      <div className="blue"></div>
      </div>
    );
  }
}

export default App;
