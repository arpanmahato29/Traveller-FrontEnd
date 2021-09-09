import React from 'react';
import Carousel from 'react-elastic-carousel';
import Tile from './Tile'

import gokarna_tile from '../../assets/images/gokarna_tile.jpg'
import havelock_tile from '../../assets/images/havelock_tile.jpg'
import kaup_tile from '../../assets/images/kaup_tile.jpg'
import puri_tile from '../../assets/images/puri_tile.jpg'
import dhanushkodi_tile from '../../assets/images/dhanushkodi_tile.jpg'
import mandarmani_tile from '../../assets/images/mandarmani_tile.jpg'
const BeachCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 4}
  ]
  return (
    <div className="my-5">
      <h4>Top Beaches in India</h4>
      <Carousel breakPoints={breakPoints}>
        <Tile imageName={gokarna_tile} location={"Gokarna Beach, Goa"} />
        <Tile imageName={havelock_tile} location={"Havelock Beach, Andaman"} />
        <Tile imageName={kaup_tile} location={"Kaup, Karnataka"} />
        <Tile imageName={dhanushkodi_tile} location={"Dhanushkodi Beach, Tamil Nadu"} />
        <Tile imageName={mandarmani_tile} location={"Mandarmani, West Bengal"} />        
    </Carousel>
    </div>
  )
}

export default BeachCarousel;