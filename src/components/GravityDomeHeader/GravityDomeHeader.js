import React, { Component } from 'react';
import './GravityDomeHeader.css';
import { Link } from 'react-router-dom';
import TiShoppingCart from 'react-icons/lib/ti/shopping-cart';
import styled from 'styled-components';

const Cart = styled(TiShoppingCart)`
    margin: 7px 0 0 15px;
    font-size: 30px;
    color: rgb(0, 255, 157);
    cursor: pointer;
`;

class GravityDomeHeader extends Component {

    render() {
        return (
            <div className="header-root">
                    <p><Link to="/"><button className="gravity-dome-header-title">Gravity Dome Records</button></Link></p>
                <div className="nav-bar">
                    <p><Link to="/music"><button className="go-to-music-button">Music</button></Link></p>
                    <p><Link to="/artists"><button className="go-to-artists-button">Artists</button></Link></p>
                    <p><Link to="/merch"><button className="go-to-merch-button">Merch</button></Link></p>
                    <p><Link to="/cart"><Cart /></Link></p>
                    <div className="header-login">Login / Sign Up</div>
                </div>
            </div>
        )
    }
}

export default GravityDomeHeader;