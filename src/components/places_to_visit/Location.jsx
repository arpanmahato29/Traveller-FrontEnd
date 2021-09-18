import React from 'react'

import Header from '../common/Header';
import Menu from '../common/Menu2';
import Footer from '../common/Footer';
import HeroSection from './HeroSection'
import '../../assets/css/location.css'
import locations from '../../assets/data/locations'
import Main from './Main';
import TopDestinations from './TopDestinations';
const Location = (props) => {
  const {location,type} = props.match.params;
  return (
    <div>
      <Header />
      <Menu />
      <HeroSection location={locations[type][location]}/>
      <Main location={locations[type][location]}/>
      <TopDestinations location={locations[type][location]} />
      <Footer />
    </div>
  )
}

export default Location;