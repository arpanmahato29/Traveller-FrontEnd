import React from 'react'
import Carousel from 'react-elastic-carousel';
import Tile from '../homepage/Tile';
const TopDestinations = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 4}
  ]
  let link = window.location.href;
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <div className="my-5">
          <h4 className="text-bold">Destiantions</h4>
          <Carousel breakPoints={breakPoints}>
            { 
              props.location.topPlaces.map((dest,index) =>{
                return(
                  <a href={`${link}/${index}`}>
                    <Tile imageName={dest.src} location={dest.destination}/>
                  </a>
                )
              } )
            }       
        </Carousel>
      </div>
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default TopDestinations
