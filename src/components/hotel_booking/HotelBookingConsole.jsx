import React,{ useState} from 'react'
import {checkConstrains} from './helperMethods'
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
  const [hotelSearch,setHotelSearch] = useState({
    search:"",
    checkInDate : null,
    checkOutDate : null,
    guests : 1,
    error : false
  })
  const handleChange = name => event => {
    setHotelSearch({ ...hotelSearch, [name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    const error = checkConstrains(hotelSearch);
    if(error){
      setHotelSearch({ ...hotelSearch,error: error});
    } 
    else {
      let details = {
        search:hotelSearch.search,
        checkInDate : hotelSearch.checkInDate,
        checkOutDate : hotelSearch.checkOutDate,
        guests : hotelSearch.guests,
      }
      sessionStorage.setItem("hotelSreachQuery",JSON.stringify(details));
      window.location.href = '/book_hotel/search_result';
    }
  }

  const ShowError = () => {
    return(
      <div class="alert alert-danger" role="alert">
        {hotelSearch.error}
      </div>
    )
  }
  return (
    <div className="p-5 pb-3 bg-white border border-success border-3 rounded">
      <form class="row g-3">
        {hotelSearch.error && <ShowError />}
        <div className="row mb-3">
          <div className="me-2">  
            <input 
              type="text" 
              className="form-control py-3" 
              id="destination" 
              placeholder="Destination or Hotel name"
              onChange={handleChange("search")}
              value={hotelSearch.search}
              />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3 me-1">
            <label for="checkin-date" className="form-label text-muted">Check In</label>
            <input 
              type="date" 
              className="form-control py-2" 
              id="checkin-date"
              onChange={handleChange("checkInDate")}
              value={hotelSearch.checkInDate}
              />
          </div>
          <div className="col-3 me-1">
            <label for="checkout-date" className="form-label text-muted">Check Out</label>
            <input 
              type="date" 
              className="form-control py-2" 
              id="checkout-date" 
              onChange={handleChange("checkOutDate")}
              value={hotelSearch.checkOutDate}
              />
          </div>
          <div className="col-3 me-1">
            <label for="number-of-guests" className="form-label text-muted">Guests</label>
            <select 
              id="number-of-guests" 
              className="form-select py-2" 
              onChange={handleChange("guests")}
              value={hotelSearch.guests}
            >
              {[...Array(10)].map((x, i) =>
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              )}
            </select>
            
          </div>
        </div>
        <div className="mx-1 text-center">
          <button 
            type="submit" 
            class="btn btn-success btn-lg rounded-pill"
            onClick={handleSubmit}
            >Find Hotels</button>
        </div>
      </form>
    </div>
  )
}



export default HotelBookingConsole;
