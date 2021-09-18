import React from 'react'
import {Carousel} from 'react-bootstrap';

import Header from '../common/Header'
import Menu from '../common/Menu2'
import Footer from '../common/Footer'

import locations from '../../assets/data/locations'
import Main from './Main';
const Destination = (props) => {
  const {type,location,destination} = props.match.params
  const dest = locations[type][location].topPlaces[destination];
  const data = {
    name : dest.destination,
    about : dest.desc
  }
  return (
    <div>
      <Header />
      <Menu />
      <DestCarousel images = {dest.images} location = {location}/>
      <Main location={data}/>
      <Footer />
    </div>
  )
}

const DestCarousel = ({images,location}) => {
  return(
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <h1 className=" text-bold">Explore <span className="text-danger">{location}</span></h1>
        <Carousel>
          {images.map((img,key) => {
            return (
              <Carousel.Item key={key}>
                <img src={img} className="d-block w-100 dest-carousel" alt="alt" />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
      <div className="col-1"></div>
    </div>
  )
}
export default Destination
