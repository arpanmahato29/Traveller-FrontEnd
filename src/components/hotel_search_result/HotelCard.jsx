import React from "react";
import {
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {FaUserShield,FaRupeeSign,FaSwimmer} from "react-icons/fa";
import {ImLocation} from "react-icons/im"
import {TiTick} from 'react-icons/ti'
import {MdWifi} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs'
import {BiDrink} from 'react-icons/bi'

import Rating from "../common/Rating";

const HotelCard = ({hotel}) => {
  return (
    <div className="mx-3 mb-4">
      <Row>
        <Col xs={10}>
          <Card className="hotel-card border border-3 ">
            <Row>
              <Col xs={4} className="p-3">
                <img src="https://picsum.photos/50" style={{width:"100%",height:"auto"}}/>
              </Col>
              <Col xs={8} className="pt-2">
                <Row style={{height:"100%"}}>
                  <Col xs={8} className="p-2">
                    <h3 className="fw-bolder" style={{marginBottom:"0"}}>{hotel.hotelName}</h3>
                    <h6 className="text-muted" style={{padding:"0",margin:"0"}}>
                      <ImLocation size={12}/>{hotel.hotelLocation}
                    </h6>
                    <div className="mb-2">
                      <span class="badge bg-light text-dark me-2 border "><MdWifi/>Free Wifi</span>
                      <span class="badge bg-light text-dark me-2 border"><BsPeopleFill/>Couple Friendly</span>
                      <span class="badge bg-light text-dark me-2 border"><FaSwimmer/>Pool</span>
                      <span class="badge bg-light text-dark me-2 border"><BiDrink/>Bar / lounge</span>
                    </div>
                    <h5 className="badge bg-warning text-dark">
                      <FaUserShield size="20" className="me-2"/>
                      100% Vaccinated Staff
                    </h5>
                    <div className="text-success">
                      <small><TiTick/>Free Cancellation till 24hrs before check-in</small><br/>
                      <small><TiTick/>Breakfast Included</small>
                    </div>
                  </Col>
                  <Col xs={4} className="pt-2 text-center pe-3 d-flex flex-column">
                    <Rating rating={hotel.rating}/>
                    <div className="mt-auto mb-3 ms-3">
                      <h3 className="m-0 p-0" style={{marginBottom:""}}><FaRupeeSign size="25"/>{Number(hotel.price).toFixed(2)}</h3>
                      <p  className="text-muted text-end"><small>per night</small></p>
                      <div class="d-grid gap-2">
                        <button class="btn btn-outline-danger">Book Now</button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={2}></Col>
      </Row>
      
    </div>
  );
};
export default HotelCard;
