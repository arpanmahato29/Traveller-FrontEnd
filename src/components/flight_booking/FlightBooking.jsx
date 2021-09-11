import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Menu2 from '../common/Menu2'
import FlightBookingConsole from './FlightBookingConsole'

const FlightBooking = () => {
  return (
    <div>
      <Header />
      <Menu2 />
      <FlightBookingConsole />
      <Footer />
    </div>
  )
}

export default FlightBooking
