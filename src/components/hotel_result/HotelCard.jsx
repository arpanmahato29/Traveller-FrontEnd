import React from "react";
import {
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {FaUserShield,FaStar,FaRupeeSign,FaSwimmer} from "react-icons/fa";
import {ImLocation} from "react-icons/im"
import {TiTick} from 'react-icons/ti'
import {MdWifi} from 'react-icons/md'
import {BsPeopleFill} from 'react-icons/bs'
import {BiDrink} from 'react-icons/bi'

const HotelCard = () => {
  return (
    <div className="mx-3 mb-4">
      <Card className="hotel-card border border-3 ">
        <Row>
          <Col xs={3} className="p-3">
            <img src="https://picsum.photos/50" style={{width:"100%",height:"auto"}}/>
          </Col>
          <Col xs={7} className="pt-2">
            <Row style={{height:"100%"}}>
              <Col xs={8} className="p-4">
                <h3 className="fw-bolder" style={{marginBottom:"0"}}>Hotel Header</h3>
                <h6 className="text-muted" style={{padding:"0",margin:"0"}}>
                  <ImLocation size={12}/>Hotel location
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
                  <small><TiTick/>Free Cancellation till 12hrs before check-in</small><br/>
                  <small><TiTick/>Breakfast Included</small>
                </div>
              </Col>
              <Col xs={4} className="pt-4 text-warning text-en pe-2">
                <FaStar  size="20"/>
                <FaStar  size="20"/>
                <FaStar  size="20"/>
                <FaStar  size="20"/>
                <FaStar  size="20"/>
                
              </Col>
            </Row>
          </Col>
          <Col xs={2} className="bg-success text-dark bg-opacity-10 p-4 text-end">
                <h3 className="mt-5" style={{marginBottom:"0"}}><FaRupeeSign/> 6750</h3>
                <h6 className="text-decoration-line-through text-muted" style={{marginmarginBottom:"0"}}><FaRupeeSign/> 10000 </h6>
                <h6 className="text-decoration-none text-success" style={{marginBottom:"0"}}>32% off</h6>
                <div class="d-grid gap-2 col-12 mx-auto pb-0 mb-0 mt-4">
                  <button class="btn btn-success">Book Now</button>
                </div>
              </Col>
        </Row>
      </Card>
    </div>
  );
};
export default HotelCard;
