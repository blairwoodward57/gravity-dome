import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './Music.scss';
import { artistsProfiles } from '../Artists/ArtistsProfiles';
import { Link } from 'react-router-dom';

class Music extends Component {

  render() {
    return (
      <div className="music-root">
        <GravityDomeHeader />
        <div className="music-title">
          Music
        </div>
        <div className="music-blocks-container">
          {artistsProfiles.map((element, i) => (
            <div className="artist-music-tile">
              <div className="artist-music-tile-name">{element.artistName}</div>
              <div className="discography-container">
                {artistsProfiles[i].albums.map((element, i) => (
                  <div className="album-container">
                    <div className="album-title">{element.albumTitle}</div>
                    <div className="album-price">
                      <div>Disc - {element.albumPriceCD}</div>
                      <div>Vinyl - {element.albumPriceVinyl}</div>
                      <button className="add-to-cart-link">Add To Cart</button>
                    </div>
                    <p><Link to="/details"><img className="album-artwork" src={element.albumArtwork} alt="" /></Link></p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Music;