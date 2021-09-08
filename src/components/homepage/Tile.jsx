import React from 'react';

const Tile = ({imageName,location}) => {
  
  const customSytle = {
    height: '300px',
    weight: '300px',
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
  return(
    <div class="card text-white col-3 px-0 mb-5 mx-3" >
      <img src={imageName} class="card-img" alt="..." style={customSytle}/>
      <div class="card-img-overlay">
        <h2 class="card-title">{location}</h2>
      </div>
    </div>
  )
}

export default Tile;