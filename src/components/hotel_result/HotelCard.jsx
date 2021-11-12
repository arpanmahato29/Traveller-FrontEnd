import React from "react";
import {
  Row,
  Col,
  Card,
} from "react-bootstrap";
import {FaUserShield} from "react-icons/fa";
import {ImLocation} from "react-icons/im"

const HotelCard = () => {
  return (
    <div className="mx-3 mb-4">
      <Card className="hotel-card border border-3 ">
        <Row>
          <Col xs={3} className="p-4">
            <img src="https://picsum.photos/50" style={{width:"100%",height:"auto"}}/>
          </Col>
          <Col xs={9}>
            <Row style={{height:"100%"}}>
              <Col xs={6} className="p-4">
                <h3 className="fw-bolder" style={{marginBottom:"0"}}>Hotel Header</h3>
                <h6 className="text-muted" style={{padding:"0",margin:"0"}}>
                  <ImLocation size={12}/>Hotel location
                </h6>
                <h5 className="badge badge-primary text-muted">
                  <span className="badge rounded-circle text-success">
                    <FaUserShield size={20}/>
                  </span>
                  <span>CLEAN PASS</span>
                </h5>
                <p>Wifi</p>
              </Col>
              <Col xs={3} className="p-4">
                <p>rating</p>
              </Col>
              <Col xs={3} className="bg-success text-dark bg-opacity-10 p-4 text-end">
                <h3 style={{marginBottom:"0"}}>Rs 6750</h3>
                <h6 style={{marginBottom:"0"}}>taxes</h6>
                <small className="text-muted">per night</small>
                <div class="d-grid gap-2 col-12 mx-auto pt-5">
                  <button class="btn btn-success">Book Now</button>
                </div>
              </Col>
            </Row>
        </Col>
        </Row>
      </Card>
    </div>
  );
};
export default HotelCard;
