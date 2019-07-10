import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js'
import './Home.css';

class Home extends Component {

    render(){
        return (
            <div className="home-root">
              <GravityDomeHeader />
              <div className="home-title">
                GRAVITY DOME RECORDS
              </div>
            </div>
        )
    }
}

export default Home