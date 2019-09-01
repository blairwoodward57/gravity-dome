import React, { Component } from 'react';
import './AlbumDetails.scss';

class AlbumDetails extends Component {
  render() {
    console.log('props', this.props)
    return (
      <div className="album-details-root">
        <div className="album-details-container-root">
          <div className="album-artist-and-title">
            <div className="album-details-artist">{this.props.details.artist}</div>
            <div className="album-details-title">{this.props.details.albumTitle}</div>
          </div>
          <div className="details-container">
            <div className="artwork-and-tracklist">
              <div className="artwork-container">
                <img className="album-details-artwork" src={this.props.details.albumArtwork} alt="" />
              </div>
              <div className="tracklist-and-release-year">
                <div className="album-tracklist-and-cart-button">
                  <div className="album-details-tracklist">
                    {this.props.details.albumPriceVinyl ? <div className="album-details-price">Vinyl - {this.props.details.albumPriceVinyl}</div> : ""}
                    {this.props.details.albumPriceCD ? <div className="album-details-price">CD - {this.props.details.albumPriceCD}</div> : ""}
                    <div className="tracklist-header">Tracklist:</div>
                    <div className="tracklist-main">
                      {this.props.details.tracklist.map((element, i) => {
                        return (<div>{i + 1}. {element}</div>)
                      })}
                    </div>
                    <div className="album-details-release-year">GDR//{this.props.details.albumReleaseYear}</div>
                    <div className="back-to-music-button" onClick={this.props.resetState}>Back To Music</div>
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