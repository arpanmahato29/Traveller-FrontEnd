import React, {useState} from 'react';
import airports from '../../assets/data/airports';

const RoundTrip = () => {

  return (
    <form class="row g-3">
      <div className="row mb-3">
        <div className="col-5 me-2">  
          <label for="departure" className="form-label text-muted">From</label>
          <select className="form-select" id="departure">
            {airports && 
              airports.map((airport,index) =>{
                console.log(airport)
                return (
                  <option key={index} value={airport.IATA_code} className="text-dark">{airport.city_name} ({airport.IATA_code})</option>
                )
              })
            }
          </select>
        </div>
        <div className="col-5 ms-2">  
          <label for="arrival" className="form-label text-muted">To</label>
          <select className="form-select" id="arrival">
            {airports && 
              airports.map((airport,index) =>{
                console.log(airport)
                return (
                  <option key={index} value={airport.IATA_code} className="text-dark">{airport.city_name} ({airport.IATA_code})</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3 me-1">
          <label for="departure-date" className="form-label text-muted">Dept Date</label>
          <input type="date" className="form-control" id="departure-date" />
        </div>
        <div className="col-3 me-1">
          <label for="return-date" className="form-label text-muted">Return Date</label>
          <input type="date" className="form-control" id="return-date" />
        </div>
      </div>
      <div className="row mb-3">
        <div class="col-3 me-1">
            <label for="travel-class" class="form-label text-muted">Class</label>
            <select id="travel-class" class="form-select">
              <option selected>Economy</option>
              <option>Business</option>
            </select>
          </div>
          <div className="col-3 ">
            <label for="no-of-travellers" className="form-label text-muted">Travellers</label>
            <input list="traveller-count-list" type="text" className="form-control" id="number-of-traveller" />
            <datalist id="traveller-count-list">
                <option value="1" />
                <option value="2" />
                <option value="3" />
                <option value="4" />
                <option value="5" />
                <option value="6" />
            </datalist>
          </div>
      </div>
      <div className="mx-1 text-center">
        <button type="submit" class="btn btn-success btn-lg rounded-pill">Find Flights</button>
      </div>
    </form>
  )
}

const OneWay = () => {
  return (
    <form class="row g-3">
      <div className="row mb-3">
        <div className="col-5 me-2">  
          <label for="departure" className="form-label text-muted">From</label>
          <select className="form-select" id="departure">
            {airports && 
              airports.map((airport,index) =>{
                console.log(airport)
                return (
                  <option key={index} value={airport.IATA_code} className="text-dark">{airport.city_name} ({airport.IATA_code})</option>
                )
              })
            }
          </select>
        </div>
        <div className="col-5 ms-2">  
          <label for="arrival" className="form-label text-muted">To</label>
          <select className="form-select" id="arrival">
            {airports && 
              airports.map((airport,index) =>{
                console.log(airport)
                return (
                  <option key={index} value={airport.IATA_code} className="text-dark">{airport.city_name} ({airport.IATA_code})</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-3 me-1">
          <label for="departure-date" className="form-label">Dept Date</label>
          <input type="date" className="form-control" id="departure-date" />
        </div>
        <div class="col-3 me-1">
            <label for="travel-class" class="form-label">Class</label>
            <select id="travel-class" class="form-select">
              <option selected>Economy</option>
              <option>Business</option>
            </select>
          </div>
          <div className="col-3 ">
          <label for="no-of-travellers" className="form-label">Travellers</label>
          <input list="traveller-count-list" type="text" className="form-control" id="number-of-traveller" />
          <datalist id="traveller-count-list">
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" />
              <option value="6" />
          </datalist>
        </div>
      </div>
      <div className="mx-1 text-center">
        <button type="submit" class="btn btn-success btn-lg rounded-pill">Find Flights</button>
      </div>
    </form>
  )
}

const Console = () => {
  const [tripType, setTripType] = useState("roundTrip");

  const onClickRoundTrip = () => {
    setTripType("roundTrip");
  }
  const onCLickOneWay = () => {
    setTripType("oneWay");
  }


  return(
    <div>
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-none text-white">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li id="round-trip-tab" className="nav-item">
                <a className="nav-link active text-light" href="#" onClick={onClickRoundTrip}>Round Trip</a>
              </li>
              <li id="one-way-tab" className="nav-item">
                <a className="nav-link text-light" href="#" onClick={onCLickOneWay}>One Way</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="p-5 pb-3 bg-white border border-success border-3 rounded">
        {
          tripType === "roundTrip" ?
          <RoundTrip /> : <OneWay /> 
        }
        </div>
      </div>
    </div>
  )
}

const FlightBookingConsole = () => {
  return(
    <div className="booking-console">
      <div className="row py-5">
        <div className="col-1"></div>
        <div className="col-10">
          <h1 className="text-light text-center mt-5 mb-2">Find the best flight for the right price</h1>
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
  );
}

export default FlightBookingConsole;