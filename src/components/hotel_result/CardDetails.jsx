import { useState } from "react";
import { Button, Collapse, Container, Row, Col } from "react-bootstrap";
import {
  faBriefcase,
  faChargingStation,
  faChevronDown,
  faClock,
  faPlane,
  faToilet,
  faUtensils,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CardDetails() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="collapse-details"
        aria-expanded={open}
        variant=""
      >
        Flight Details
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
      <Collapse in={open}>
        <Container>
          <Row className="p-2">
            <Col xs={7} className="bg-success">
              <Row>
                <Row className="pt-4">
                  <div>
                    <h5 className="text-light p-1">Flight Details</h5>
                  </div>
                  <Row className="text-end">
                    <Col className="p-2">
                      <Row>SpiceJet, SG-3001 (Economy)</Row>
                      <Row>De Havilland DHC-8</Row>
                    </Col>
                    <Col className="p-2">
                      <Row>
                        <Col>
                          <FontAwesomeIcon icon={faWifi} />
                          <FontAwesomeIcon icon={faChevronDown} />
                          <FontAwesomeIcon icon={faToilet} />
                          <FontAwesomeIcon icon={faChargingStation} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Row>
                <hr />
                <Row>
                  <Row>
                    <Col className="p-2">
                      <Row>
                        <Col>
                          <Row>New Delhi (DEL)</Row>
                          <Row>
                            <h4>06:35</h4>
                          </Row>
                          <Row>Sun, 19 Sept 2021</Row>
                          <Row>Indira Gandhi, T-3</Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col className="p-2">
                      <Row>
                        <Col xs={2}>
                          <FontAwesomeIcon icon={faClock} />
                        </Col>
                        <Col xs={10}>3h 35m</Col>
                      </Row>
                      <Row>
                        <Col>
                          <hr />
                        </Col>
                        <Col>
                          <FontAwesomeIcon icon={faPlane} />
                        </Col>
                      </Row>
                      <Row>Via BhavyaNagar</Row>
                    </Col>
                    <Col className="p-2">
                      <Row>
                        <Col>
                          <Row>Mumbai (BOM)</Row>
                          <Row>
                            <h4>10:10</h4>
                          </Row>
                          <Row>Sun, 19 Sept 2021</Row>
                          <Row>Chatrapati Sevaji...</Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="bg-secondary p-3 text-light">
                    <Col>
                      <Row>
                        CheckIn Baggage:
                        <FontAwesomeIcon icon={faBriefcase} /> 15kgs
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <FontAwesomeIcon icon={faUtensils} />
                        Paid Meal
                      </Row>
                    </Col>
                  </Row>
                </Row>
              </Row>
            </Col>
            <Col xs={5} className="bg-warning">
              <Row>
                <Row className="p-4">
                  <div>
                    <h5 className="text-light p-1">Fare Summary</h5>
                  </div>
                  <Row className="p-2">
                    <Col>
                      <Row>Fare Summary</Row>
                      <Row>Adult x 1</Row>
                    </Col>
                    <Col>
                      <Row>Base Fare</Row>
                      <Row>Rs 4,739</Row>
                    </Col>
                    <Col>
                      <Row>Fees and Taxes</Row>
                      <Row>Rs 757</Row>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="p-2">
                    <Col xs={8}>
                      <h5>You Pay:</h5>
                    </Col>
                    <Col xs={4}>
                      <h4>
                        <b> Rs 2,496</b>
                      </h4>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="p-2">
                    <Row>
                      Note: Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Assumenda nam, magni veritatis laudantium alias
                      placeat.
                    </Row>

                    <Row className="p-4">
                      <Button variant="danger">Book Now</Button>
                    </Row>
                  </Row>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </Collapse>
    </>
  );
}

export default CardDetails;
