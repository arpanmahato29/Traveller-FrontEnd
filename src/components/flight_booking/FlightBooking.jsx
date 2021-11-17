import React from 'react'

import Header from '../common/Header'
import Menu2 from '../common/Menu2'
import Footer from '../common/Footer'
import FlightBookingDetails from './FlightBookingDetails'
import ImportantInformation from './ImportantInformation'
import TravelletDetails from './TravelletDetails'

const FlightBooking = () => {
  
  return (
    <div>
      <Header />
      <Menu2 />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <FlightBookingDetails />
            <ImportantInformation />
            <TravelletDetails />
          </div>
          <div className="col-1"></div>
        </div>
      <Footer />
    </div>
  )
}

export default FlightBooking
