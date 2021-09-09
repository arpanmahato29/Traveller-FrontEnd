import React from 'react';
import Tile from './Tile'
import BeachCarousel from './BeachCarousel'
import MountainCarousal from './MountainCarousal'
import TourismCarousal from './TourismCarousal'
import goa_tile from '../../assets/images/goa_tile.jpg'
import kolkata_tile from '../../assets/images/kolkata_tile.jpg'
import puri_tile from '../../assets/images/puri_tile.jpg'
import panchgani_tile from '../../assets/images/Panchgani_tile.jpg'
const ExploreMore = () => {
  let customSytleClass = "col-2 px-0 mb-5 mx-3"
  return(
    <div>
      <div className="row secondary-bg" >
        <div className="col-1"></div>
        <div className="col-10">
          <div className="mt-5">
            <h2 className="fw-bold mb-3 mt-4">Dream Your Next Trip</h2>
            <h3>Weekend Gateway to</h3>
          </div>
          <div className="row">
            <Tile imageName={goa_tile} location={"Palolem Beach, Goa"} styles = {customSytleClass}/>
            <Tile imageName={kolkata_tile} location={"Kolkata, West Bengal"} styles = {customSytleClass}/>
            <Tile imageName={puri_tile} location={"Puri, Odisha"} styles = {customSytleClass}/>
            <Tile imageName={panchgani_tile} location={"Panchgani, Maharastra"} styles = {customSytleClass}/>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="mt-5 mb-2">
            <h3>Destinations travelers love</h3>
          </div>
          <BeachCarousel />
          <MountainCarousal />
          <TourismCarousal />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default ExploreMore;