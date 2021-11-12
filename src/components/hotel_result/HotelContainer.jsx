import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HotelCard from "./HotelCard";
import HotelFilter from "./HotelFilter";


const HotelContainer = () => {
  return (
    // <Container className="m-0 mw-100 p-3">
    //   <Row className="border">
    //     <Col xs={3} className="border p-3">
    //       Filter columns will be added here
    //     </Col>
    //     <Col xs={9} className="border">
    //       <HotelCard />
    //       <HotelCard />
    //       <HotelCard />
    //     </Col>
    //   </Row>
    // </Container>
    <div className="row mt-3 mb-5">
      <div className="col-1"></div>
      <div className="col-10">
        <div className="row">
          <div className="col-3">
            <HotelFilter />
          </div>
          <div className="col-9 ">
          {[...Array(10)].map((x, i) =>
            <HotelCard key={i + 1}/>
          )}
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default HotelContainer;
