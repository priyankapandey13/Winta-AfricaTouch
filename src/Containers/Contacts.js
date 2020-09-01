import React from "react";
import contact from "../assets/contact.png";
import timing from "../assets/timing.png";
import cvr from "../assets/cvr.png";
import location from "../assets/location.png";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import ownerpic from "../assets/owner.png";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <section>
      <Container className="visitus pt-5 pb-5 mt-4 pb-4">
        <h3 className="mb-2 text-center">Visit Us</h3>
        <Row>
          <Col md={{ span: 8 }}>
            <Row>
              <Col md={{ span: 5 }} className="mt-5">
                <ul>
                  <li>
                    <img src={contact} alt="contact Number" />
                    <a href="tel:+4531512410">+45 31 51 24 10</a>
                  </li>
                  <li>
                    <img src={timing} alt="Timings" />
                    10:00 – 18:00
                  </li>
                  <li>
                    <img src={cvr} alt="CVR Number" />
                    35 72 54 66
                  </li>
                </ul>
              </Col>
              <Col md={{ span: 7 }} className="mt-5">
                <ul>
                  <li>
                    <img src={location} alt="Location" />
                    Nørrebrogade 74, 2200 København N
                  </li>
                  <li>
                    <img src={email} alt="Email" />
                    <a href="mailto:binibini09@yahoo.com?subject=Inquiry about products">
                      binibini09@yahoo.com
                    </a>
                  </li>
                  <li>
                    <img src={facebook} alt="Facebook Link" />
                    <a
                      href="https://www.facebook.com/wintaafricantouch/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      facebook.com/pg/wintaafricantouch/
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col className="aboutowner">
                Business Owner : Binyam Sultan Tesfamichael
                <span></span>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 3, offset: 1 }}>
            <img src={ownerpic} alt="Winta Africa-touch" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;
