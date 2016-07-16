import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'; // Allows us to connect our store to our components.

import store from './store';

import App from './components/App/App';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
// import Cart from './components/Cart/Cart';

//With redux we must wrap the router inside of the Provider component.

document.addEventListener( "DOMContentLoaded", () => {
  let reactNode = document.getElementById('react-node');

  if ( reactNode ) {
    ReactDOM.render(
      <Provider store={ store }>
        <Router history={ browserHistory }>
          <Route path="/" component={ App }>
            <Route path="login" component={ Login }/>
            <Route path="shop" component={ Shop }/>
          </Route>
        </Router>
      </Provider>,
      reactNode );
  }
});
//
// <Route path="cart" component={ Cart }/>
// </Router>
