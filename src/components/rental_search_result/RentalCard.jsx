import React from "react";
import {
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {FaRupeeSign, FaWifi, FaParking} from "react-icons/fa";
import {IoBedOutline} from "react-icons/io5"
import {ImLocation} from "react-icons/im"
import {TiTick} from 'react-icons/ti'
import {GiCampCookingPot} from 'react-icons/gi'
import {BsPeopleFill} from 'react-icons/bs'
import {BiBath} from 'react-icons/bi'
import {CgSmartHomeWashMachine} from 'react-icons/cg'

import Rating from "../common/Rating";

const RentalCard = ({rental}) => {
  console.log(rental)
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
                    <h3 className="fw-bolder" style={{marginBottom:"0"}}>{rental.propertyName}</h3>
                    <h6 className="text-muted" style={{padding:"0",margin:"0"}}>
                      <ImLocation className="pb-1" size={20}/>{rental.propertyLocation}
                    </h6>
                    <div className="my-2">
                      <p className="p-0 m-1">
                        <span class="badge bg-light text-dark me-2 mb-1 ">
                          <IoBedOutline className="pb-1 me-2" size={20}/> {rental.bedrooms}
                          {
                            rental.bedrooms > 1 ? ' bedrooms' : ' bedroom'
                          }
                        </span>
                        <span class="badge bg-light text-dark me-2 mb-1 ">
                          <BiBath className="pb-1 me-2" size={20}/> {rental.bathrooms}
                          {
                            rental.bathrooms > 1 ? ' bathrooms' : ' bathroom'
                          }
                        </span>
                        <span class="badge bg-light text-dark me-2 mb-1 ">
                          <BsPeopleFill className="pb-1 me-2" size={20}/> {rental.capacity}
                          {
                            rental.capacity > 1 ? ' people' : ' person'
                          }
                        </span>
                        { 
                          rental.ketchin && 
                          <span class="badge bg-light text-dark me-2 mb-1  ">
                            <GiCampCookingPot className="pb-1 me-2" size={20}/> Kitchen
                          </span>
                        }
                        {
                          rental.wifi &&
                          <span class="badge bg-light text-dark me-2 mb-1  ">
                            <FaWifi className="pb-1 me-2" size={20}/> Wifi
                          </span>
                        }
                        {
                          rental['washing machine'] && 
                          <span class="badge bg-light text-dark me-2 mb-1  ">
                            <CgSmartHomeWashMachine className="pb-1 me-2" size={20}/> Washing Machine
                          </span>
                        }
                        {
                          rental.parking && 
                          <span class="badge bg-light text-dark me-2 mb-1  ">
                            <FaParking className="pb-1 me-2" size={20}/> Parking
                          </span>
                        }
                      </p>
                    </div>
                    <div className="text-success">
                      <small><TiTick/>Free Cancellation till 24hrs before check-in</small><br/>
                    </div>
                  </Col>
                  <Col xs={4} className="pt-2 text-center pe-3 d-flex flex-column">
                    <Rating rating={rental.rating}/>
                    <div className="mt-auto mb-3 ms-3">
                      <h3 className="m-0 p-0" style={{marginBottom:""}}>
                        <FaRupeeSign size="25"/>{Number(rental.price).toFixed(2)}
                      </h3>
                      <p  className="text-muted text-end">
                        <small>per night</small>
                      </p>
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
export default RentalCard;
