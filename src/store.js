import React, { Component } from 'react';
import logo from './logo.svg';
import './store.css';
import store1 from './assets/store/desktop/1.png'
import store2 from './assets/store/desktop/2.png'
import store3 from './assets/store/desktop/3_left.png'
import store4 from './assets/store/desktop/4_right.png'
import store5l from './assets/store/desktop/5_left.png'
import store5r from './assets/store/desktop/5_right.png'
import store6l from './assets/store/desktop/6_left.png'
import store6m from './assets/store/desktop/6_middle.png'
import store6r from './assets/store/desktop/6_right.png'
import store7l from './assets/store/desktop/7_left.gif'
import store7r from './assets/store/desktop/7_right.gif'
import store8l from './assets/store/desktop/8_left.png'
import store8r from './assets/store/desktop/8_right.png'
import store9 from './assets/store/desktop/9.gif'
import store101l from './assets/store/desktop/10___left.png'
import store101m from './assets/store/desktop/10__middle.png'
import store10l from './assets/store/desktop/10_left.png'
import store10r from './assets/store/desktop/10_right.png'
import store11 from './assets/store/desktop/11_.png'
import store12 from './assets/store/desktop/12_.png'
import store13 from './assets/store/desktop/13_.png'
import portal from './assets/portal.png';
import tuhutz from './assets/store/portal/tuhutzs.png';
import Karl from './assets/store/portal/karl.jpg';
import contribute from './assets/store/portal/contribute.png';
import upparrows from './assets/store/portal/TUHUTZSBLACK.png';
import Films from './assets/store/portal/Films.png';
import hatzs from './assets/store/portal/hatzs.png';
import paintings from './assets/store/portal/paintings.png';
import sculpture from './assets/store/portal/sculpture.png';
import ReactAudioPlayer from 'react-audio-player';


import background from './assets/store/final/Newworld_desktop.png'
import backgroundMobile from './assets/store/final/Newworld_mobile.png'

class Store extends Component {

  componentDidMount() {
    var list = document.getElementsByTagName("audio")[0]
    list.classList.add("mystyle")
    // console.log("audios tag",list)
    document.getElementsByClassName('react-audio-player ')[0].loop = true
  }

  click1 = () => {
    document.getElementById("store10l").style.display = "none"
    document.getElementById("store11").style.display = "inline"
  }

  click2 = () => {
    document.getElementById("store11").style.display = "none"
    document.getElementById("store12").style.display = "inline"
  }

  click3 = () => {
    document.getElementById("store12").style.display = "none"
    document.getElementById("store13").style.display = "inline"
  }

  click4 = () => {

  }

  tuhutz = () => {
    document.getElementById("myModal").style.display = "none"
  }

  contribute = () => {
    document.getElementById("myModal").style.display = "none"
  }

  render() {
    return (
      <React.Fragment>
      <div className="App1">
        <ReactAudioPlayer
          src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
          autoPlay
          controls
          ref={(element) => { this.rap = element; }}
        />
        <div className="black"></div>

        <div className="container-fluid">
          <div>
            <img
              className="storeBackground"
              src={window.screen.width > 560 ? background : backgroundMobile} />
          </div>

          <div>
            <a href="/burger">
              <img src={store6l} className="images store6l" /></a>
          </div>
          <div>
            <a href="http://www.tuhutzs.com/#/vending-machine">
              <img src={store6m} className="images store6m" /></a>
          </div>
          <div>
            <a href="/kiosk">
              <img src={store6r} className="images store6r" /></a>
          </div>
          <div>
            <img src={store7l} className="images store7l" />
          </div>
          <div>
            <img src={store7r} className="images store7r" />
          </div>
          <div>
            <img src={store8l} className="images store8l" />
          </div>
          <div>
            <img src={store8r} className="images store8r" />
          </div>
          <div>
            <img src={store101l} className="images store101l" />
          </div>
          <div>
            <img src={store101m} className="images store101m" />
          </div>
          <div>
            <img src={store10l} className="images store10l" id="store10l" onClick={this.click1} />
          </div>
          <div>
            <img src={store10r} className="images store10r" />
          </div>
          <div>
            <img src={store11} className="images store11" id="store11" onClick={this.click2} />
          </div>
          <div>
            <img src={store12} className="images store12" id="store12" onClick={this.click3} />
          </div>
          <div>
            <img src={portal} className="portal" data-toggle="modal" data-target="#myModal" id="portal" />
          </div>
          <div>
            <img src={store13} className="images store13" id="store13" />
          </div>
          <div>
            <img src="/static/media/music.9226b6e5.png" class="music " id="music" />
          </div>
        </div>
        {/* <div className="black"></div> */}
      </div>
        <div id="myModal" class="modal fade" role="dialog">
          <div className="modal-dialog modal-md">
            <div className="modal-content">
            <button type="button" class="close modalCloseButton" data-dismiss="modal">×</button>
              <div className="modal-body">
                <img src={tuhutz} className="tuhutz" id="tuhutz" data-toggle="modal"
                  data-dismiss="modal" data-target="#tuhutzss" onClick={this.tuhutz} />
                <img src={sculpture} className="tuhutz" id="order2" />
                <img src={paintings} className="tuhutz" id="order1" />
                <img src={hatzs} className="tuhutz" id="order1" />
                <img src={Films} className="tuhutz" id="order1" />
                <img src={contribute} className="tuhutz" data-toggle="modal"
                  data-dismiss="modal" data-target="#contribute" id="order1" onClick={this.contribute} />
              </div>
            </div>
          </div>
        </div>


        <div id="tuhutzss" class="modal fade " role="dialog">
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-body karl-bio">
                <div className="col-xs-8">
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
                <div className="col-xs-4">
                  <img src={Karl} className="karl" id="karl" />
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
                  <p> Artists & Curators</p>
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

      </React.Fragment>
    );
  }
}

export default Store;
