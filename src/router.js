import React from 'react';
import Music from './components/Music/Music.js';
import Home from './components/Home/Home.js';
import Artists from './components/Artists/Artists.js';
import Merch from './components/Merch/Merch.js';
import { HashRouter as Router, Route } from 'react-router-dom';

export default(

           <Router>
               <div>
                   <Route component={Home} exact path='/'/>
                   <Route component={Music} path='/music'/>   
                   <Route component={Artists} path='/artists'/>   
                   <Route component={Merch} path='/merch'/>   
               </div>
           </Router>
)