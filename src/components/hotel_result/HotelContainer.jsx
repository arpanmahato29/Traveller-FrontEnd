import react from "react";
import { Container, Row, Col } from "react-bootstrap";
import HotelCard from "./HotelCard";


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
      <div className="col-10 border">
        <div className="row">
          <div className="col-3 border">Filter Section</div>
          <div className="col-9  border">
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
