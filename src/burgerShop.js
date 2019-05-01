import React, { Component } from 'react';
import './App.css';
import burgerbar from './assets/burger-bar/burgerbar.png';
import combo1 from './assets/burger-bar/Combo1_PNG.png';
import combo2 from './assets/burger-bar/Combo2_PNG.png';
import combo3 from './assets/burger-bar/Combo3_PNG.png';
import order1 from './assets/burger-bar/Combo1m.png';
import order2 from './assets/burger-bar/Combo2m.png';
import order3 from './assets/burger-bar/Combo3m.png';
import choose from './assets/burger-bar/6.png';
import pay from './assets/burger-bar/7.png';
import order from './assets/burger-bar/Order.mp3';
import cooking from './assets/burger-bar/Cooking.mp3';
import paynow from './assets/burger-bar/Paynow.mp3';
import ReactAudioPlayer from 'react-audio-player';
import exit from './assets/burger-bar/3.png';

var once=true;
class BurgerShop extends Component {
  componentDidMount(){
    var list = document.getElementsByTagName("audio")[0]
    list.classList.add("mystyle")
    var list = document.getElementsByTagName("audio")[1]
    list.classList.add("mystyle")
    var list = document.getElementsByTagName("audio")[2]
    list.classList.add("mystyle")
    document.getElementsByClassName('react-audio-player ')[0].loop=true
    document.getElementsByClassName('react-audio-player ')[1].loop=true
    document.getElementsByClassName('react-audio-player ')[2].loop=true
    document.getElementsByClassName('react-audio-player ')[0].muted=true
    document.getElementsByClassName('react-audio-player ')[1].muted=true
    document.getElementsByClassName('react-audio-player ')[2].muted=true
  }

  Choose=()=>{
      if(once){
        document.getElementsByClassName('react-audio-player ')[0].muted=false
        setTimeout(()=>{
          document.getElementsByClassName('react-audio-player ')[0].loop=false
        },1000)
        document.getElementById("choose").style.display="inline";
        once=false;
      }
  }

  burgerchoosen=(order)=>{
    document.getElementsByClassName('react-audio-player ')[1].muted=false
        setTimeout(()=>{
          document.getElementsByClassName('react-audio-player ')[1].loop=false
        },3000)
    document.getElementById("choose").style.display="none"
    document.getElementById("pay").style.display="inline"
    document.getElementById(order).style.display="inline"

  }

  paynow=()=>{
    document.getElementsByClassName('react-audio-player ')[2].muted=false
        setTimeout(()=>{
          document.getElementsByClassName('react-audio-player ')[2].loop=false
        },500)
  }

  render() {
    return (
      <div className="App bugerBar">
       <ReactAudioPlayer
        src={order}
        autoPlay
        controls
        ref={(element) => { this.rap = element; }}
      />
      <ReactAudioPlayer
        src={cooking}
        autoPlay
        controls
        ref={(element) => { this.rap = element; }}
      />
      <ReactAudioPlayer
        src={paynow}
        autoPlay
        controls
        ref={(element) => { this.rap = element; }}
      />
      
        <img src={burgerbar} className="burger-shop"  onClick={this.Choose}/>
        <div >
        <img src={combo1} className="burger1" onClick={()=>this.burgerchoosen("order1")} />
        </div>
        <div >
        <img src={combo2} className="burger2" onClick={()=>this.burgerchoosen("order2")}/>
        </div>
        <div>
        <img src={combo3} className="burger3"onClick={()=>this.burgerchoosen("order3")} />
        </div>
        <div>
        <img src={choose} className="choose" id="choose" />
        </div>
        <div>
        <img src={pay} className="pay" id="pay" data-toggle="modal" data-target="#myModal" onClick={this.paynow} />
        </div>
        <div>
        <img src={exit} className="exit" id="exit" />
        </div>



        <div id="myModal" class="modal fade" role="dialog">
        
        <div className="modal-dialog modal-md">
            <div className="modal-content">
                <div className="modal-body">
                <img src={order1} className="order"  id="order1" />
                <img src={order2} className="order"  id="order2" />
                <img src={order3} className="order"  id="order3" />
                </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default BurgerShop;
