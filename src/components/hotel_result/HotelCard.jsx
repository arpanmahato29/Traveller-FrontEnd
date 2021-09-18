import react from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
const HotelCard = () => {
  return (
    <div className="m-5">
      <Card className="p-4">
        <Row>
          <Col xs={2}>
            <img src="https://picsum.photos/100" alt="" />
          </Col>
          <Col xs={8}>
            <Row>Title</Row>
            <Row>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae
              totam, veritatis nostrum exercitationem itaque deleniti delectus
              vitae beatae accusamus, ad suscipit commodi quam minus eos facilis
              nisi dolorum sit!
            </Row>
          </Col>
          <Col xs={2}>
            <Button variant="primary">Book Now</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default HotelCard;
