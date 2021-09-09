import React from 'react';
import Carousel from 'react-elastic-carousel';
import Tile from './Tile'

import taj_mahal_tile from '../../assets/images/taj_mahal_tile.jpg'
import red_fort_tile from '../../assets/images/red_fort_tile.jpg'
import amer_fort_tile from '../../assets/images/amer_fort_tile.jpg'
import mysore_palace_tile from '../../assets/images/mysore_palace_tile.jpg'
import mecca_masjid_tile from '../../assets/images/mecca_masjid_tile.jpg'
const TourismCarousal = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 4}
  ]
  return (
    <div className="my-5">
      <h4>Top Tourist Destinations in India</h4>
      <Carousel breakPoints={breakPoints}>
        <Tile imageName={taj_mahal_tile} location={"Taj Mahal, Agra"} />
        <Tile imageName={red_fort_tile} location={"Red Fort, Delhi"} />
        <Tile imageName={amer_fort_tile} location={"Amer Fort, Rajasthan"} />       
        <Tile imageName={mysore_palace_tile} location={"Mysore Palace, Karnataka"} />       
        <Tile imageName={mecca_masjid_tile} location={"Mecca Masjid, Telangana"} />       
    </Carousel>
    </div>
  )
}

export default TourismCarousal;