import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './Music.css';
import { artistsProfiles } from '../Artists/ArtistsProfiles';

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
                    </div>
                    <img className="album-artwork" src={element.albumArtwork} alt="" />
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