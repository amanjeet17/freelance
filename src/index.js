import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store';
import Kiosk from './kiosk';
import BurgerShop from './burgerShop';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from 'react-router-dom';

const routes =(
<BrowserRouter>
<div>
  <Route exact path="/" component={App} />
  <Route exact path="/store" component={Store} />
  <Route exact path="/kiosk" component={Kiosk} />
  <Route exact path="/burger" component={BurgerShop} />
</div>

</BrowserRouter>)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
