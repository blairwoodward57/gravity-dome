import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import AlbumDetails from './AlbumDetails';
import './Music.scss';
import { artistsProfiles } from '../Artists/ArtistsProfiles';

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAlbum: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    console.log('heyo heyo');
    this.setState({
      currentAlbum: null
    })
  }

  handleClick(album) {
    console.log('album', album)
    this.setState({
      currentAlbum: album
    })
    console.log(this.state)
  }

  render() {
    console.log('hey', this.state.currentAlbum);
    if (!this.state.currentAlbum) {
      return (
        <div className="music-root">
          <GravityDomeHeader resetState={this.resetState} />
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
                      <img className="album-artwork" src={element.albumArtwork} alt="" onClick={() => this.handleClick(element)} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <GravityDomeHeader resetState={this.resetState} />
          <AlbumDetails details={this.state.currentAlbum} resetState={this.resetState} />
        </div>
      )
    }
  }
}

export default Music;