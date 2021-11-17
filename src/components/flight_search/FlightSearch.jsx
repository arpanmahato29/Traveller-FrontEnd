import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Menu2 from '../common/Menu2'
import FlightSearchConsole from './FlightSearchConsole'

const FlightSearch = () => {
  return (
    <div>
      <Header />
      <Menu2 />
      <FlightSearchConsole />
      <Footer />
    </div>
  )
}

export default FlightSearch
