import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import {FaPlane,FaRupeeSign} from 'react-icons/fa'

import {getTravelHours,getFlightBrand} from './helperMethods'
import {getTotalCost} from '../flight_booking/helperMethods'


const FlightCard = ({flight}) => {

  const travelHours = getTravelHours(flight.schedule.arrTime, flight.schedule.deptTime)
  const totalCost = getTotalCost(flight.price);
  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('flight_details',JSON.stringify(flight));
    window.location.href = '/book_flight'
  }
  const FlightBrand = () => {
    return(
      <Row>
        <Col xs={3} className="mt-1">
          <img src={getFlightBrand(flight.flight.carrierName)} width={40} alt=""/>
        </Col>
        <Col className="ms-3">
          <h5 className="fw-bolder p-0 m-0">{flight.flight.carrierName}</h5>
          <small>{flight.flight.flightNo}</small>
        </Col>
      </Row>
    )
  }
  return (
    <div className="mx-3 mb-3">
      <Card className="p-4 border border-3">
        <Row>
          <Col xs={3}>
            <FlightBrand />
          </Col>
          <Col xs={5}>
            <Row>
              <Col xs={4}>
                <Row>{flight.schedule.deptTime}</Row>
                <Row>
                  {flight.schedule.srcAirport.airportLocation}
                </Row>
              </Col>
              <Col xs={3}>
                <FaPlane className='mt-3'/>
              </Col>
              <Col xs={5}>
                <Row>{flight.schedule.arrTime}</Row>
                <Row>
                    {flight.schedule.dstnAirport.airportLocation}
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <Row>{travelHours}</Row>
          </Col>
          <Col xs={2} className="text-end">
            <Row>
              <h4><FaRupeeSign className="pb-1"/>{totalCost}</h4>
              <Button variant="outline-danger" onClick={handleSubmit}> Book Now</Button>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default FlightCard;
