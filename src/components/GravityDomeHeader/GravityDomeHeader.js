import React, { Component } from 'react';
import './GravityDomeHeader.css';
import { Link } from 'react-router-dom';


class GravityDomeHeader extends Component {

    render() {
        return (
            <div className="header-root">
                    <p><Link to="/"><button className="gravity-dome-header-title">Gravity Dome Records</button></Link></p>
                <div className="nav-bar">
                    <p><Link to="/music"><button className="go-to-music-button">Music</button></Link></p>
                    <p><Link to="/artists"><button className="go-to-artists-button">Artists</button></Link></p>
                    <p><Link to="/merch"><button className="go-to-merch-button">Merch</button></Link></p>
                </div>
            </div>
        )
    }
}

export default GravityDomeHeader;