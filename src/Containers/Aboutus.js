import React from "react";
import wintashop from "./../assets/shop.png";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <section className="bgdark " id="About-Us">
      <Container className="pt-5 pb-5 mt-5 ">
        <h3 className="mb-4 text-center">About Us</h3>
        <Row>
          <Col xs={12} md={5} lg={6} className="mt-3 mr-5">
            <p>
              Winta Africa Touch, located at Nørrebrogade 74 just opposite
              Assistens Kirkegården in Nørrebro, Copenhagen was founded by
              Binyam Sultan Tesfamichael in 2015.
            </p>
            <p>
              The shop has a fantastic friendly and cosy atmosphere and here
              you, among other things, will find Eritrean food products like
              spices, tea and coffee, jebanas, smal electronic appliances such
              as smart stoves and a an interesting variety of traditional
              clothing and hair products.
            </p>
            <p>
              The shop primarily tends to a market of clients from Ethiopia,
              Eritrea, Somalia, and Sudan with products from home but is
              definitely also worth a visit for people of other origins.
            </p>
            <p>
              Please stop by and pay us a visit - looking forward to seeing you
              in the shop.
            </p>
          </Col>
          <Col xs={12} md={6} lg={5} className="pl-0 pr-0">
            <img src={wintashop} className="" alt="wintashop" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;
