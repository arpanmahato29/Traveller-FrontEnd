import React, { useState } from "react";
import airports from "../../assets/data/airports";
import {checkConstrains} from './helperMethods'

const Console = () => {
  const [tripType, setTripType] = useState("oneWay");
  const [flightDetails,setFlightDetails] = useState({
    source : "IXA",
    destination : "IXA",
    departureDate : null,
    returnDate : null,
    isReturnAvailable : false,
    travelClass : "economy",
    passenger : 1,
    error : false
  })
  const onClickRoundTrip = () => {
    setTripType("roundTrip");
    setFlightDetails({
      source : "IXA",
      destination : "IXA",
      departureDate : null,
      returnDate : null,
      isReturnAvailable : true,
      travelClass : "economy",
      passenger : 1,
      error : false
    });
  };
  const onCLickOneWay = () => {
    setTripType("oneWay");
    setFlightDetails({
      source : "IXA",
      destination : "IXA",
      departureDate : null,
      returnDate : null,
      isReturnAvailable : false,
      travelClass : "economy",
      passenger : 1,
      error : false
    });
  };

  const handleChange = name => event => {
    setFlightDetails({ ...flightDetails, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const error = checkConstrains(flightDetails);
    if(error){
      setFlightDetails({...flightDetails,error: error});
    } 
    else {
      let details = {
        source:flightDetails.source,
        destination:flightDetails.destination,
        departure:flightDetails.departureDate,
        travelClass : flightDetails.travelClass,
        passenger:flightDetails.passenger
      }
      if(flightDetails.isReturnAvailable){
        details = {...details,return:flightDetails.returnDate};
      }
      sessionStorage.setItem("flightQuery",JSON.stringify(details));
      window.location.href = '/flight_search/result';
    }
  }

  const Source = () => {
    return(
      <div>
        <label htmlFor="departure" className="form-label text-muted">
          From    
        </label>
        <select className="form-select py-2" id="departure" onChange={handleChange("source")} value={flightDetails.source}>
          {airports &&
            airports.map((airport, index) => {
              return (
                <option
                  key={index}
                  value={airport.IATA_code}
                  className="text-dark"
                >
                  {airport.city_name} ({airport.IATA_code})
                </option>
              );
            })}
        </select>
      </div>
    )
  }
  const Destination = () => {
    return (
      <div>
        <label htmlFor="arrival" className="form-label text-muted">
          To
        </label>
        <select className="form-select py-2" id="arrival" onChange={handleChange("destination")} value={flightDetails.destination}>
          {airports &&
            airports.map((airport, index) => {
              return (
                <option
                  key={index}
                  value={airport.IATA_code}
                  className="text-dark"
                >
                  {airport.city_name} ({airport.IATA_code})
                </option>
              );
            })}
        </select>
      </div>
    )
  }
  const DepartureDate = () => {
    return(
      <div>
        <label htmlFor="departure-date" className="form-label text-muted">
            Dept Date
          </label>
          <input
            type="date"
            className="form-control py-2"
            id="departure-date"
            onChange={handleChange("departureDate")}
            value={flightDetails.departureDate}
          />
      </div>
    )
  }
  const ReturnDate = () => {
    return (
      <div>
      <label htmlFor="return-date" className="form-label text-muted">
            Return Date
          </label>
          <input 
            type="date" 
            className="form-control py-2" 
            id="return-date" 
            onChange={handleChange("returnDate")}
            value={flightDetails.returnDate}
          />
    </div>
    )
  }
  const TravelClass = () => {
    return(
      <div>
        <label htmlFor="travel-class" className="form-label text-muted">
          Class
        </label>
        <select id="travel-class" className="form-select py-2" onChange={handleChange("travelClass")} value={flightDetails.travelClass}>
          <option defaultValue>Economy</option>
          <option>Business</option>
        </select>
      </div>
    )
  }
  const SearchFlights = () => {
    return (
      <div className="d-grid gap-2 col-4 mx-auto">
        <button type="submit" className="btn btn-success " onClick={handleSubmit}>
          Find Flights
        </button>
      </div>
    )
  }
  const ShowError = () => {
    return(
      <div class="alert alert-danger" role="alert">
        {flightDetails.error}
      </div>
    )
  }

  const RoundTrip = () => {
    
    return (
      <form className="row g-3">
        {flightDetails.error && <ShowError />}
        <div className="row mb-3">
          <div className="col-5 me-2">
            <Source />
          </div>
          <div className="col-5 ms-2">
            <Destination />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3 me-1">
            <DepartureDate />
          </div>
          <div className="col-3 me-1">
            <ReturnDate />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3 me-1">
            <TravelClass />
          </div>
        </div>
        <div className="mx-1 text-center">
            <SearchFlights />
        </div>
      </form>
    );
  };
  
  const OneWay = () => {
    
    return (
      <form className="row g-3">
        {flightDetails.error && <ShowError />}
        <div className="row mb-3">
          <div className="col-5 me-2">
            <Source />
          </div>
          <div className="col-5 ms-2">
            <Destination />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3 me-1">
            <DepartureDate />
          </div>
          <div className="col-3 me-1">
            <TravelClass />
          </div>
        </div>
        <div className="mx-1 text-center">
          <SearchFlights />
        </div>
      </form>
    );
  };
  
  return (
    <div>
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-none text-white">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li id="one-way-tab" className="nav-item">
                <button
                  className="btn text-light"
                  onClick={onCLickOneWay}
                >
                  One Way
                </button>
              </li>
              <li id="round-trip-tab" className="nav-item">
                <button
                  className="btn active text-light"
                  onClick={onClickRoundTrip}
                >
                  Round Trip
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className="p-5 pb-3 bg-white rounded">
          {tripType === "roundTrip" ? <RoundTrip /> : <OneWay />}
        </div>
      </div>
    </div>
  );
};

const FlightSearchConsole = () => {
  return (
    <div className="flight-booking-console">
      <div className="row py-5">
        <div className="col-1"></div>
        <div className="col-10">
          <h1 className="text-light text-center mt-5 mb-2">
            Find the best flight for the right price
          </h1>
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
};

export default FlightSearchConsole;
