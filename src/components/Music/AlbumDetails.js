import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './AlbumDetails.css';

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
        <div></div>
      </div>
    )
  }
}

export default AlbumDetails;