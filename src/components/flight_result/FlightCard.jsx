import react from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { faSubway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardDetails from "./CardDetails";

const FlightCard = () => {
  return (
    <div className="m-5">
      <Card className="p-4">
        <Row>
          <Col xs={2}>
            <Row>
              <Row>SpiceJet</Row>
              <Row>SG-3001</Row>
            </Row>
          </Col>
          <Col xs={4}>
            <Row>
              <Col>
                <Row>06:35</Row>
                <Row>New Delhi</Row>
              </Col>
              <Col>
                <FontAwesomeIcon icon={faSubway} />
              </Col>
              <Col>
                <Row>10:10</Row>
                <Row>Mumbai</Row>
              </Col>
            </Row>
          </Col>
          <Col xs={1}>
            <Row>3h 35m</Row>
            <Row>1 Stop</Row>
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
