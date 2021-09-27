import React,{ useState } from "react";
import { Button, Collapse, Container, Row, Col } from "react-bootstrap";
import {FaChevronDown, FaPlaneDeparture} from 'react-icons/fa'

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
        <FaChevronDown className="ms-2"/>
      </Button>
      <Collapse in={open}>
        <Container className="text-white">
          <Row className="py-2">
            <Col xs={7} className="bg-success ps-3">
              <Row>
                <Row className="pt-4">
                  <Row className="text-end">
                    <Col className="p-2">
                      <Row>SpiceJet, SG-3001 (Economy)</Row>
                      <Row>De Havilland DHC-8</Row>
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
                      <Row className="mt-4">
                        <Col  className="text-center">
                          <FaPlaneDeparture size={40}/>
                        </Col>
                      </Row>
                      <Row>
                        <Col  className="text-center">3h 35m</Col>
                      </Row>
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
                </Row>
              </Row>
            </Col>
            <Col xs={5} className="bg-success">
              <Row>
                <Row className="pt-4 pb-2">
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
