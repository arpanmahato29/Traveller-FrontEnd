import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import {FaPlane} from 'react-icons/fa'
import CardDetails from "./CardDetails";
import airlines from "../../assets/data/airlines"

const FlightCard = ({flightQuery}) => {
  const getFlightBrand = (brandName) => {
    if(brandName === 'Air Asia'){
      return airlines.air_asia;
    } else if(brandName === 'Air India'){
      return airlines.air_india;
    } else if(brandName === 'IndiGo'){
      return airlines.indigo;
    } else if(brandName === 'SpiceJet'){
      return airlines.spicejet;
    } else if(airlines === 'Vistara'){
      return airlines.vistara;
    }
    return airlines.unknown;
  }
  const FlightBrand = () => {
    return(
      <Row>
        <Col xs={3}>
          <img src={getFlightBrand('SpiceJet')} width={30} alt=""/>
        </Col>
        <Col><h5 className="fw-bolder">SpiceJet</h5></Col>
        <Row>SG-3001</Row>
      </Row>
    )
  }
  return (
    <div className="m-3">
      <Card className="p-4">
        <Row>
          <Col xs={2}>
            <FlightBrand />
          </Col>
          <Col xs={4}>
            <Row>
              <Col>
                <Row>06:35</Row>
                <Row>Delhi</Row>
              </Col>
              <Col>
                <FaPlane className='mt-3'/>
              </Col>
              <Col>
                <Row>10:10</Row>
                <Row>Mumbai</Row>
              </Col>
            </Row>
          </Col>
          <Col xs={1}>
            <Row>3h 35m</Row>
          </Col>
          <Col xs={5}>
            <Row>
              <Col className="text-end">
                <h4>Rs 5,496</h4>
              </Col>
              <Col className="text-center">
                <Button variant="outline-danger"> Book Now</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col>
            <CardDetails />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default FlightCard;
