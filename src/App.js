import React, { Component } from 'react';
import './App.scss';
import Music from './components/Music/Music.js';
import Home from './components/Home/Home.js';
import Artists from './components/Artists/Artists.js';
import Merch from './components/Merch/Merch.js';
import Cart from './components/Cart/Cart.js';
import AlbumDetails from './components/Music/AlbumDetails.js';
import { HashRouter as Router, Route } from 'react-router-dom';
// import router from './router.js';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/music',
    component: Music,
  },
  {
    path: '/artists',
    component: Artists,
  },
  {
    path: '/merch',
    component: Merch,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/details',
    component: AlbumDetails,
  }
]

class App extends Component {
render() {
    return (
      <div className="App">
        {/* {router} */}
        <Router>
          {routes.map(({ path, component: C }) => (
            C === Home ?
            <Route
              exact path={path}
              render={(props) => <C {...props} populateAlbum={1}/>}
            />
            : 
            <Route 
              path={path}
              render={(props) => <C {...props} populateAlbum={1}/>}
            />
          ))}
        </Router>
      </div>
    );
  }
}

export default App;