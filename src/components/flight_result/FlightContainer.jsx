import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FlightCard from "./FlightCard";

const FlightContainer = () => {
  return (
    <Container className="m-0 mw-100 p-3">
      <Row className="border">
        <Col xs={3} className="border p-3">
          Filter columns will be added here
        </Col>
        <Col xs={9} className="border">
          <FlightCard />
        </Col>
      </Row>
    </Container>
  );
};

export default FlightContainer;
