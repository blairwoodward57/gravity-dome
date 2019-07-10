import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './Music.css';

class Music extends Component {

    render() {
        return (
            <div className="music-root">
              <GravityDomeHeader/>
              <div className="music-title">
                Music
              </div>
            </div>
        )
    }
}

export default Music;