import React from 'react'
import Header from '../common/Header'
import Menu2 from '../common/Menu2'
import Footer from '../common/Footer'
import Dashboard from './Dashboard'
const DashboardContainer = () => {
  return (
    <div>
      <Header />
      <Menu2 />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default DashboardContainer
