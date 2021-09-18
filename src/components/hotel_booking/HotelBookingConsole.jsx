import React from 'react'

const HotelBookingConsole = () => {
  return (
    <div className="booking-console">
      <div className="row py-5">
        <div className="col-1"></div>
        <div className="col-10">
          <h1 className="text-light text-center mt-5 mb-2">Latest reviews. Lowest prices.</h1>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <Console />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  )
}

const Console = () => {
  return (
    <div className="p-5 pb-3 bg-white border border-success border-3 rounded">
      <form class="row g-3">
        <div className="row mb-3">
          <div className="me-2">  
            <input type="text" className="form-control py-3" id="destination" placeholder="Destination or Hotel name"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3 me-1">
            <label for="checkin-date" className="form-label text-muted">Check In</label>
            <input type="date" className="form-control py-2" id="checkin-date"/>
          </div>
          <div className="col-3 me-1">
            <label for="checkout-date" className="form-label text-muted">Check Out</label>
            <input type="date" className="form-control py-2" id="checkout-date" />
          </div>
          <div className="col-3 me-1">
            <label for="number-of-guests" className="form-label text-muted">Guests</label>
            <input type="number" className="form-control py-2" id="number-of-guests" min="1"/>
          </div>
        </div>
        <div className="mx-1 text-center">
          <button type="submit" class="btn btn-success btn-lg rounded-pill">Find Hotels</button>
        </div>
      </form>
    </div>
  )
}



export default HotelBookingConsole;
