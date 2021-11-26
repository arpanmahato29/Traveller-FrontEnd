import React from 'react'
import {FaRupeeSign} from 'react-icons/fa'
import {RiPrinterFill} from 'react-icons/ri'
import FlightTicket from './FlightTicket'

import BookingSummary from './BookingSummary'

const BookingDetails = () => {
  const handlePrint = (event) => {
    event.preventDefault();
    window.print()
  }
  
  return (
    <div>
      <div className="card border border-5" >
        <div className="card-header">
          <div className="row">
            <div className="col-8">
              <h3 className="card-title">
                Order Number : 8797012466
              </h3>
            </div>
            <div className="col-4">
              <h5 className="card-title text-end">
                <button className="btn btn-outline-dark noPrint" onClick={handlePrint}>
                  <RiPrinterFill className="pb-1 me-2" size="20"/>PRINT
                </button>
              </h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <BookingSummary />
          <hr/>
          <FlightTicket/>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails
