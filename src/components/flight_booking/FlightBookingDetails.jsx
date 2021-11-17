import React from 'react'
import {FaLongArrowAltRight,FaPlaneDeparture,FaPlaneArrival,FaGripLinesVertical,FaRupeeSign} from 'react-icons/fa'
import { getFlightBrand } from '../flight_search_result/helperMethods';
import { getDay, getDate,getFarePrice, getTaxes, getFee } from './helperMethods';

function FlightBookingDetails() {
  const flightDetails = JSON.parse(sessionStorage.getItem('flight_details'));
  console.log(flightDetails);
  const FlightDetails = () => {
    return (
      <div className="card border-2 border-light mt-2">
        <div className="card-body bg-light">
          <div className="row">
            <div className="col-1 text-end me-1">
                {flightDetails.schedule.deptTime}
                <br/>
                <br/>
                {flightDetails.schedule.arrTime}
            </div>
            <div className="col-1 text-center me-1">
                <FaPlaneDeparture size="20"/><br/>
                <FaGripLinesVertical className="text-muted"/><br/>
                <FaPlaneArrival size="20"/>
            </div>
            <div className="col-5  me-1">
                <p>
                  <span className="fw-bolder">{flightDetails.schedule.srcAirport.airportLocation}</span> . 
                  <small className="text-muted">{flightDetails.schedule.srcAirport.airportName}</small>
                </p>
                <p>
                  <span className="fw-bolder">{flightDetails.schedule.dstnAirport.airportLocation}</span> . 
                  <small className="text-muted">{flightDetails.schedule.dstnAirport.airportName}</small>
                </p>
            </div>
            <div className="col-2 me-1">
              <h6>Check-in</h6>
              <small>15 Kgs (1 piece only)</small>
            </div>
            <div className="col-2">
              <h6>Cabin</h6>
              <small>7 Kgs (1 piece only)</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const FareDetails = () => {
    const price = flightDetails.price
    const base = getFarePrice(price);
    const fee = getFee(price);
    const tax = getTaxes(price);
    return(
      <div class="card border border-5">
        <div class="card-body">
          <h4 className=" p-1 text-center">Fare Summary</h4>
          <div className="row">
            <div className="col-7">Base Fare :</div>
            <div className="col-5 text-end"><FaRupeeSign className="pb-1"/>{base}</div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-7">Fee :</div>
            <div className="col-5 text-end"><FaRupeeSign className="pb-1"/>{fee}</div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-7">Taxes :</div>
            <div className="col-5 text-end"><FaRupeeSign className="pb-1"/>{tax}</div>
          </div>
          <hr />
          <div className="row">
              <div className="col-7"><h4>Total : </h4></div>
              <div className="col-5 text-end"><h4><FaRupeeSign className="pb-1"/>{price}</h4></div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="row">
        <div className="col-8 me-5">
        <div class="card border border-5">
            <div class="card-body px-4 pt-3">
              <h4>
                {flightDetails.schedule.srcAirport.airportLocation + '  '}
                <FaLongArrowAltRight className="text-muted"/>
                {'  ' + flightDetails.schedule.dstnAirport.airportLocation}
              </h4>
              <div className="bg-warning text-light px-2">
                <h6 >
                  {getDay(flightDetails.schedule.date)}, {getDate(flightDetails.schedule.date)}
                </h6>
              </div>
              <div className="row">
                <div className="col-1 mt-1">
                  <img src={getFlightBrand(flightDetails.flight.carrierName)} width={50} alt=""/>
                </div>
                <div className="col-3 mt-2">
                  <h5 className="fw-bolder p-0 m-0">{flightDetails.flight.carrierName}</h5>
                  <small>{flightDetails.flight.flightNo}</small>
                </div>
                <div className="col-8 text-end mt-2 ">
                  <h6>Economy</h6>
                </div>
                <FlightDetails />
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <FareDetails />
        </div>
      </div>
    </div>
  )
}

export default FlightBookingDetails
