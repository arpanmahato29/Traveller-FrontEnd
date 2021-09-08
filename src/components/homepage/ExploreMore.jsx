import React from 'react';
import Tile from './Tile'
import goa_tile from '../../assets/images/goa_tile.jpg'
import kolkata_tile from '../../assets/images/kolkata_tile.jpg'
import puri_tile from '../../assets/images/puri_tile.jpg'
const ExploreMore = () => {
  
  return(
    <div className="row" style={{backgroundColor : '#eafaf4'}}>
      <div className="col-1"></div>
      <div className="col-10">
        <div className="my-5">
          <h2 className="fw-bold mb-3 mt-4">Dream Your Next Trip</h2>
          <h3>Weekend Gateway to</h3>
        </div>
        <div className="row">
          <Tile imageName={goa_tile} location={"Goa, India"} />
          <Tile imageName={kolkata_tile} location={"Kolkata, India"} />
          <Tile imageName={puri_tile} location={"Puri, India"} />
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

export default ExploreMore;