import React from 'react';
import Carousel from 'react-elastic-carousel';
import Tile from './Tile'

import nubra_valley_tile from '../../assets/images/nubra_valley_tile.jpg'
import mussoorie_tile from '../../assets/images/mussoorie_tile.jpg'
import manali_tile from '../../assets/images/manali_tile.jpg'
import chopta_tile from '../../assets/images/chopta_tile.jpg'
import nandi_hills_tile from '../../assets/images/nandi_hills_tile.jpg'
const MountainCarousal = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 4}
  ]
  return (
    <div className="my-5">
      <h4>Top Mountain Locations in India</h4>
      <Carousel breakPoints={breakPoints}>
        <Tile imageName={nubra_valley_tile} location={"Nubra Valley, Ladakh"} />
        <Tile imageName={mussoorie_tile} location={"Mussoorie, Uttrakhand"} />
        <Tile imageName={manali_tile} location={"Manali, Himachal Pradesh"} />       
        <Tile imageName={chopta_tile} location={"Chopta, Uttrakhand"} />       
        <Tile imageName={nandi_hills_tile} location={"Nandi Hills, Karnataka"} />       
    </Carousel>
    </div>
  )
}

export default MountainCarousal;