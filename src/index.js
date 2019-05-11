import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store';
import Kiosk from './kiosk';
import BurgerShop from './burgerShop';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from 'react-router-dom';
import Basura from './basura';
import InsideBasura from './insideBasura';
import Future from './future';

const routes =(
<BrowserRouter>
<div>
  <Route exact path="/" component={App} />
  <Route exact path="/store" component={Store} />
  <Route exact path="/kiosk" component={Kiosk} />
  <Route exact path="/burger" component={BurgerShop} />
  <Route exact path="/basura" component={Basura} />
  <Route exact path="/insidebasura" component={InsideBasura} />
  <Route exact path="/future" component={Future} />
</div>

</BrowserRouter>)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
