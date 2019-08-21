import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './AlbumDetails.scss';

class AlbumDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAlbum: {
        artist: "Cryangles",
        albumTitle: "Blessed EP",
        artwork: "https://i.imgur.com/NkmEm5m.jpg",
        releaseYear: 2011,
        vinylPrice: "",
        cdPrice: "$4",
        tracklist: [
          "Baksketball",
          "Cave Walk",
          "All The Umbrellas In London",
          "Friends With Boats (Rough)"
        ]
      }
    }
  }

  render() {
    return (
      <div className="album-details-root">
        <GravityDomeHeader />
        <div className="album-details-container-root">
          <div className="album-artist-and-title">
            <div className="album-details-artist">{this.state.selectedAlbum.artist}</div>
            <div className="album-details-title">{this.state.selectedAlbum.albumTitle}</div>
          </div>
          <div className="details-container">
            <div className="artwork-and-tracklist">
              <div className="artwork-container">
                <img className="album-details-artwork" src={this.state.selectedAlbum.artwork} alt="" />
              </div>
              <div className="tracklist-and-release-year">
                <div className="album-tracklist-and-cart-button">
                  <div className="album-details-tracklist">
                    {this.state.selectedAlbum.vinylPrice ? <div className="album-details-price">Vinyl - {this.state.selectedAlbum.vinylPrice}</div> : ""}
                    {this.state.selectedAlbum.cdPrice ? <div className="album-details-price">CD - {this.state.selectedAlbum.cdPrice}</div> : ""}
                    {this.state.selectedAlbum.tracklist.map((element, i) => {
                      return (<div>{i + 1}. {element}</div>)
                    })}
                    <div className="album-details-release-year">GDR//{this.state.selectedAlbum.releaseYear}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumDetails;