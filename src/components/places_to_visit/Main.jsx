import React from 'react'
import About from './About'

function Main({location}) {
  return (
    <div className="row py-5">
      <div className="col-1"></div>      
      <div className="col-10">
        <About location={location} />
      </div>      
      <div className="col-1"></div>      
    </div>
  )
}

export default Main
