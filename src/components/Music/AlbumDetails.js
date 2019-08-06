import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './AlbumDetails.scss';

class AlbumDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedAlbum: {}
        }
    }

  render() {
    return (
      <div className="album-details-root">
        <GravityDomeHeader />
        <div className="album-details-title">
            Music
        </div>
        <div className="details-container">
            <div className="album-details-title">{this.state.selectedAlbum.title}</div>
            <div className="album-details-artwork">{this.state.selectedAlbum.artwork}</div>
            <div className="album-details-release-year">{this.state.selectedAlbum.releaseYear}</div>
            <div className="album-details-price-vinyl">{this.state.selectedAlbum.vinylPrice}</div>
            <div className="album-details-price-cd">{this.state.selectedAlbum.cdPrice}</div>
            <div className="album-details-tracklist">{this.state.selectedAlbum.tracklist}</div>
        </div>
      </div>
    )
  }
}

export default AlbumDetails;