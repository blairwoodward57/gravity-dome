import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js';
import './Artists.css';

class Artists extends Component {

    render() {
        const artistsProfile = [
            {artistName: "Cryangles",
             artistImage: "placeholder"
            },
            {artistName: "Grayhouse Lane",
             artistImage: "placeholder"
            },
            {artistName: "Mall Bath Room",
             artistImage: "placeholder"
            },
            {artistName: "Basil Of Baker Street",
             artistImage: "placeholder"
            },
            {artistName: "Log Lady",
             artistImage: "placeholder"
            },
            {artistName: "Puss N' Boots",
             artistImage: "placeholder"
            },
            {artistName: "The Bird Flu",
             artistImage: "placeholder"
            },
            {artistName: "Zen",
             artistImage: "placeholder"
            },
            {artistName: "Duck Boy",
             artistImage: "placeholder"
            },
            {artistName: "African Elephant Embryo",
             artistImage: "placeholder"
            },
            {artistName: "Bicycle Thief",
             artistImage: "placeholder"
            },
            {artistName: "Bruce Call",
             artistImage: "placeholder"
            },
        ]
        return (
            <div className="artists-root">
              <GravityDomeHeader/>
              <div className="artists-title">
                Artists
              </div>
              <div className="artist-tile-container">
                  {artistsProfile.map((element, i) => (
                  <div className="artist-tile">
                      <div className="artist-tile-name">{element.artistName}</div>
                  </div>
                  ))}
              </div>
            </div>
        )
    }
}

export default Artists;