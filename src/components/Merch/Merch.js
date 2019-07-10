import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './Merch.css';

class Merch extends Component {

    render() {
        return (
            <div className="merch-root">
              <GravityDomeHeader/>
              <div className="merch-title">
                Merch
              </div>
            </div>
        )
    }
}

export default Merch;