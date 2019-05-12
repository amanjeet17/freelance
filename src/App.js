import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
// import one from './assets/1.png';
// import two from './assets/2.png';
// import three from './assets/3.png';
// import four from './assets/4.png';
import five from './assets/5.png';
import five1 from './assets/51.png';
import five2 from './assets/52.png';
import five3 from './assets/53.png';
import six from './assets/6.png';
import six1 from './assets/61.png';
import six2 from './assets/62.png';
import music from './assets/music.png';
import audio from './assets/audio/sound.ogg';
import psst from './assets/audio/psst.mp3';
import background from './assets/home/Courtside_desktop.png'
import backgroundMobile from './assets/home/Courtside_mobile.png'

import tuhutz from './assets/store/portal/tuhutzs.png';
import Karl from './assets/store/portal/karl.jpg';
import contribute from './assets/store/portal/contribute.png';
import upparrows from './assets/store/portal/TUHUTZSBLACK.png';
import hatzs from './assets/store/portal/hatzs.png';
import paintings from './assets/store/portal/paintings.png';
import sculpture from './assets/store/portal/sculpture.png';

import sculpture1 from './assets/sculpture/firstworldjammin.jpg';
import sculpture2 from './assets/sculpture/firstworldjammin_2.jpg'
import sculpture3 from './assets/sculpture/firstworldjammin_3.jpg'
import sculpture4 from './assets/sculpture/Greatspirit_1.jpg'
import sculpture5 from './assets/sculpture/Greatspirit_2.jpg'
import sculpture6 from './assets/sculpture/Greatspirit_3.jpg'

import painting1 from './assets/paintings/alpine.jpg';
import painting2 from './assets/paintings/basura.jpg';
import painting3 from './assets/paintings/BLUESQ.jpg';
import painting4 from './assets/paintings/BOOMTOWN.jpg';
import painting5 from './assets/paintings/bug.jpg';
import painting6 from './assets/paintings/ELOCEANO.jpg';

import hat1 from './assets/hats/hatzs.png';
import hat2 from './assets/hats/hatzs_1.jpg';
import hat3 from './assets/hats/hatzs_2.jpg';
import hat4 from './assets/hats/hatzs_3.jpg';
import hat5 from './assets/hats/hatzs_4.jpg';
import hat6 from './assets/hats/model_1.jpg';
import hat7 from './assets/hats/model_2.jpg';
import hat8 from './assets/hats/model_3.jpg';
import hat9 from './assets/hats/model_4.jpg';
import hat10 from './assets/hats/model_5.jpg';



var once = true;
class App extends Component {

  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.psst = React.createRef();
    this.state = { play: false }
  }

  componentDidMount() {
    var list = document.getElementsByTagName("audio")[0]
    list.classList.add("mystyle");
    this.audioRef.current.currentTime = 0;
    this.audioRef.current.play();
    // console.log("audios tag",list)
    // document.getElementsByClassName('react-audio-player ')[0].loop = true
  }

  soundmute = () => {
    if (once) {
      document.getElementsByClassName('react-audio-player ')[0].muted = true;
      once = false;
    }
    else {
      document.getElementsByClassName('react-audio-player ')[0].muted = false
      once = true;
    }
  }

  click1 = (e) => {
    console.log(e.target);
    this.psst.current.currentTime = 0;
    this.psst.current.play();
    // e.target.style.display ="none";
    document.getElementById("five").style.display = "none"
    document.getElementById("five1").style.display = "inline"
    document.getElementById("six").style.display = "inline"

  }

  click2 = (e) => {
    console.log(e.target);
    // e.target.style.display ="none";
    document.getElementById("six").style.display = "none"
    document.getElementById("six1").style.display = "inline"
  }

  click3 = (e) => {
    console.log(e.target);
    // e.target.style.display ="none";
    document.getElementById("six1").style.display = "none";
    document.getElementById("five1").style.display = "none";
    document.getElementById("six2").style.display = "inline";
    document.getElementById("five2").style.display = "inline";
  }

  click4 = (e) => {
    document.getElementById("six2").style.display = "none";
    document.getElementById("five2").style.display = "none";
    document.getElementById("five3").style.display = "inline";
  }

  click5 = (e) => {
    let path = `/store`;
    this.props.history.push("/store")
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
      <React.Fragment>
        <div className="App">
          <audio
            src={audio}
            loop={true}
            ref={this.audioRef}></audio>

          <audio src={psst} ref={this.psst}></audio>
          <div className="blue"></div>
          <div className="container">
            <div>
              <a href="/basura">
                <img
                  className="logo"
                  src={window.screen.width > 560 ? background : backgroundMobile} />
              </a>
            </div>
            <div>
              <img src={five} className="images five" id="five" onClick={this.click1} />
            </div>
            <div>
              <img src={five1} className="images five1" id="five1" onClick={this.click2} />
            </div>
            <div>
              <img src={six} className="images six" id="six" onClick={this.click2} />
            </div>
            <div>
              <img src={six1} className="images six1" id="six1" onClick={this.click3} />
            </div>
            <div>
              <img src={five2} className="images five2" id="five2" onClick={this.click4} />
            </div>
            <div>
              <img src={six2} className="images six2" id="six2" onClick={this.click4} />
            </div>
            <div>
              <a href="/store">
                <img src={five3} className="images five3" id="five3" />
              </a>
            </div>
            <div>
              <img src={music} className="music" id="music" onClick={() => this.playAudio(this.audioRef)} />
            </div>
            <div><img src="/static/media/portal.63d0b8bd.png" class="portal" data-toggle="modal" data-target="#myModal" id="portal" /></div>
          </div>
        </div>

        <div id="myModal" class="modal fade" role="dialog">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <button type="button" class="close modalCloseButton" data-dismiss="modal">×</button>
              <div className="modal-body">
                <img
                  src={tuhutz}
                  className="tuhutz"
                  id="tuhutz"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#tuhutzss"
                  onClick={this.tuhutz} />
                <img
                  src={sculpture}
                  className="tuhutz"
                  id="order2"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#sculptureModal" />
                <img
                  src={paintings}
                  className="tuhutz"
                  id="order1"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#paintingModal" />
                <img
                  src={hatzs}
                  className="tuhutz"
                  id="order1"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#hatsModal" />
                <img src={contribute} className="tuhutz" data-toggle="modal"
                  data-dismiss="modal" data-target="#contribute" id="order1" onClick={this.contribute} />
              </div>
            </div>
          </div>
        </div>

        <div id="tuhutzss" class="modal fade " role="dialog" style={{ overflow: "scroll" }}>
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-body karl-bio">
                <div className="col-xs-12">
                  <img src={Karl} className="karl" id="karl" />
                  Tuhutzs is the artistic name for Karl Bauer.
                  Born England, United Kingdom 04/07/1988
                  Specialising in video production Karl adopts many disciplines to describe & present his work.
                  Contact: karl.bauer@ymail.com
                  Artist Statement
                  It is practically impossible not to produce some form of waste multiple times per day from
                  something you interact with or consume. The bins that stray our planet in all possible places, in a
                  variety of style and colours lay open a view displaying a relationship with our planet. As our
                  civilisation opens its doors to the information age. I feel the food we buy is killing us, the water is
                  bottled in plastic. The ultimate need to consume is laid bare. Import, export, the seas run full of
                  cargo ships. As we flood our planet with products and packaging we blame “you”. The notion “be
                  brave” represents a positive message in the physical and mental struggle that we face today.
                  A bin has never been as cool as it is now.
                  As the Chinese develop new ambitious infrastructure throughout South America, opening new
                  shipping canals and trade deals as the BRF Belt and Road Forum, we can see a new carving of
                  globalisation reaching further out changing the worlds shape. As products, choices and options
                  begin to fill the shelves of developing nations, the unconscious need for bins, their stability and
                  functionality, will have to match the phase of an advancing individual demand for more.
                  We are not to blame for having been flooded with excess packaging, one use items, pre packed,
                  processed living. In the western world our choices exceed that of developing worlds. We are
                  victims of design, choice, private profiteering and unstable global management. We all require
                  basic food and water, but do we really need the thousands of options and designs, left solely
                  upon an end choice that is, what can you afford to buy.
                </div>

              </div>
            </div>
          </div>
        </div>

        <div id="contribute" class="modal fade" role="dialog">
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="col-xs-12">
                  <h3>Web Developer</h3>
                  <p>Amanjeet Singh - India - amanjeetgilard@yahoo.in</p>
                  <p>Darren Murphy - United Kingdom</p>
                  <h3> Character designers</h3>
                  <p> Luca Tomas Prino - Argentina - lucaprino@yahoo.com</p>
                  <p>Clarita S. Moyano - Argentina - claritasmoyano@gmail.com</p>
                  <h3> Film & Photography</h3>
                  <p> Curtis Rowlands - United Kingdom - info@curtisrowland.com</p>
                  <p>Denis Mcmahon - United Kingdom - Denis.mcm@hotmail.com</p>
                  <h3> Artists & Curators</h3>
                  <p> Bobby Benjamin - United Kingdom - benjamithefuture@hotmail.co.uk</p>
                  <h3> Music Prodcuers</h3>
                  <p> Shxxr - Adam Trattles - United Kingdom - shxxrofficial@gmail.com</p>
                </div>
                <br />
                <img src={upparrows} style={{ textAlign: "center", width: "20%" }} />
              </div>
            </div>
          </div>
        </div>

        <div id="sculptureModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content non-radius non-border">
              <button type="button" class="close modalCloseButton" data-dismiss="modal" aria-hidden="true" >×</button>
              <div class="modal-body overflowScrollModal" style={{ paddingTop: '38px' }}>
                <div id="myGallery" class="carousel slide" data-interval="false">
                  <div class="carousel-inner">
                    <div class="item active">
                      <img src={sculpture1} alt="image for sculpture 1" />
                    </div>
                    <div class="item">
                      <img src={sculpture2} alt="image for sculpture 2" />
                    </div>
                    <div class="item">
                      <img src={sculpture3} alt="image for sculpture 3" />
                    </div>
                    <div class="item">
                      <img src={sculpture4} alt="image for sculpture 4" />
                    </div>
                    <div class="item">
                      <img src={sculpture5} alt="image for sculpture 5" />
                    </div>
                    <div class="item">
                      <img src={sculpture6} alt="image for sculpture 6" />
                    </div>
                  </div>
                  <a class="left carousel-control" href="#myGallery" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span></a>
                  <a class="right carousel-control" href="#myGallery" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="paintingModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content non-radius non-border">
              <button type="button" class="close modalCloseButton" data-dismiss="modal" aria-hidden="true" >×</button>
              <div class="modal-body overflowScrollModal" style={{ paddingTop: '38px' }}>
                <div id="paintingCarousel" class="carousel slide" data-interval="false">
                  <div class="carousel-inner">
                    <div class="item active">
                      <img src={painting1} alt="image for painting 1" />
                    </div>
                    <div class="item">
                      <img src={painting2} alt="image for painting 2" />
                    </div>
                    <div class="item">
                      <img src={painting3} alt="image for painting 3" />
                    </div>
                    <div class="item">
                      <img src={painting4} alt="image for painting 4" />
                    </div>
                    <div class="item">
                      <img src={painting5} alt="image for painting 5" />
                    </div>
                    <div class="item">
                      <img src={painting6} alt="image for painting 6" />
                    </div>
                  </div>
                  <a class="left carousel-control" href="#paintingCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span></a>
                  <a class="right carousel-control" href="#paintingCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="hatsModal" class="modal fade" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content non-radius non-border">
              <button type="button" class="close modalCloseButton" data-dismiss="modal" aria-hidden="true" >×</button>
              <div class="modal-body overflowScrollModal" style={{ paddingTop: '38px' }}>
                <div id="hatCarousel" class="carousel slide" data-interval="false">
                  <div class="carousel-inner">
                    <div class="item active">
                      <img src={hat1} alt="image for hat 1" />
                    </div>
                    <div class="item">
                      <img src={hat2} alt="image for hat 2" />
                    </div>
                    <div class="item">
                      <img src={hat3} alt="image for hat 3" />
                    </div>
                    <div class="item">
                      <img src={hat4} alt="image for hat 4" />
                    </div>
                    <div class="item">
                      <img src={hat5} alt="image for hat 5" />
                    </div>
                    <div class="item">
                      <img src={hat6} alt="image for hat 6" />
                    </div>
                    <div class="item">
                      <img src={hat7} alt="image for hat 7" />
                    </div>
                    <div class="item">
                      <img src={hat8} alt="image for hat 8" />
                    </div>
                    <div class="item">
                      <img src={hat9} alt="image for hat 9" />
                    </div>
                    <div class="item">
                      <img src={hat10} alt="image for hat 10" />
                    </div>
                  </div>
                  <a class="left carousel-control" href="#hatCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span></a>
                  <a class="right carousel-control" href="#hatCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
