import React from 'react';

const Tile = ({imageName,location,styles}) => {
  
  const customSytle = {
    height: '230px',
    weight: '200px',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: '5px'
  }
  return(
    <div className={styles}>
      <div className="card text-white tile-card" >
        <img src={imageName} class="card-img tile-img" alt="..." style={customSytle}/>
        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
          <h2 className="card-title tile-title" >{location}</h2>
        </div>
      </div>
    </div>
  )
}

export default Tile;