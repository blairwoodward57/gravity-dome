import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './Artists.css';
import { artistsProfiles } from './ArtistsProfiles';

class Artists extends Component {

    render() {
        return (
            <div className="artists-root">
                <GravityDomeHeader />
                <div className="artists-title">
                    Artists
              </div>
                <div className="artist-tile-container">
                    {artistsProfiles.map((element, i) => (
                        <div className="artist-tile">
                            <div className="artist-tile-name">{element.artistName}</div>
                            <img className="artist-tile-image" src={element.artistImage} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Artists;