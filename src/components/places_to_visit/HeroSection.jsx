import React from 'react';

const HeroSection = ({location}) => {

  const {bg,tagline,name} = location;
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`
  }
  return(
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
      <h1 className=" text-bold">Explore <span className="text-danger">{name}</span></h1>
      <div className="banner" style={bgStyle}>
          <h3 className="tagline">{tagline}</h3>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  )
}

export default HeroSection;