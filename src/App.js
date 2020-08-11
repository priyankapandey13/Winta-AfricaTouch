import React from "react";
// import logo from './logo.svg';
import logo from "./assets/wintalogo.png";
// import banner from "./assets/banner.jpg";
import product01 from "./assets/prod01.jpg";
import product02 from "./assets/prod02.jpg";
import product03 from "./assets/prod03.jpg";
import product04 from "./assets/prod04.jpg";
import wintashop from "./assets/shop.png";

import contact from "./assets/contact.png";
import timing from "./assets/timing.png";
import cvr from "./assets/cvr.png";
import location from "./assets/location.png";
import email from "./assets/email.png";
import facebook from "./assets/facebook.png";

import ownerpic from "./assets/owner.png";
// import  from 'react-bootstrap';
import { Container, Navbar, Nav, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Iframe from "react-iframe";

function App() {
  return (
    <>
      <header>
        <Navbar bg="pt-0 pb-0" expand="lg" sticky="top">
          <Navbar.Brand href="#home" className="pb-0">
            <img src={logo} className="App-logo" alt="Winta Africa-touch" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Our-Products">Our Products</Nav.Link>
              <Nav.Link href="#About-Us">About Us</Nav.Link>
              <Nav.Link href="#Visit-Us">Visit Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main>
        <section className="bannerarea">
          <Container>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </section>

        <section id="Our-Products">
          <Container className="pt-5 pb-5 mt-4 mb-3 pb-4 text-center">
            <Row className="justify-content-md-center">
              <h3 className="mb-3">Our Products</h3>
              <p>
                Your beauty is our duty!! Winta Africa Touch is a cosmetics
                beauty company with many different types of cosmetics. We have
                international brand name cosmetic products, such as: Forex,
                Cantu Shea, Castro oil, Blue magic and many more. We also have a
                large selection of hairs, e.g. Wig afro short, Wig semi and Wig
                cool.
              </p>

              <Card>
                <Card.Img variant="top" src={product01} />
                <Card.Body>
                  <Card.Title className="text-center">
                    Texture Softner
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={product02} />
                <Card.Body>
                  <Card.Title className="text-center">Jebena</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={product03} />
                <Card.Body>
                  <Card.Title className="text-center">dabo mesob</Card.Title>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={product04} />
                <Card.Body>
                  <Card.Title className="text-center">
                    ORS- olive oil
                  </Card.Title>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </section>

        <section className="bgdark " id="About-Us">
          <Container className="pt-5 pb-5 mt-5 ">
            <h3 className="mb-4 text-center">About Us</h3>
            <Row>
              <Col md={{ span: 5 }} className="mt-3 mr-5 pr-2">
                <p>
                  Winta Africa Touch, located at Nørrebrogade 74 just opposite
                  Assistens Kirkegården in Nørrebro, Copenhagen was founded by
                  Binyam Sultan Tesfamichael in 2015.
                </p>
                <p>
                  The shop has a fantastic friendly and cosy atmosphere and here
                  you, among other things, will find Eritrean food products like
                  spices, tea and coffee, jebanas, smal electronic appliances
                  such as smart stoves and a an interesting variety of
                  traditional clothing and hair products.
                </p>
                <p>
                  The shop primarily tends to a market of clients from Ethiopia,
                  Eritrea, Somalia, and Sudan with products from home but is
                  definitely also worth a visit for people of other origins.
                </p>
                <p>
                  Please stop by and pay us a visit - looking forward to seeing
                  you in the shop.
                </p>
              </Col>
              <Col md={{ span: 6 }} className="ml-4 pr-0">
                <img src={wintashop} className="" alt="wintashop" />
              </Col>
            </Row>
          </Container>
        </section>

        <section id="Visit-Us">
          <Container fluid>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.8621822692394!2d12.55331442048524!3d55.69138379353184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253abbd9f2ba7%3A0x91ac5ed8751a7666!2sWinta%20African%20Touch!5e0!3m2!1sen!2sdk!4v1596900514645!5m2!1sen!2sdk"
              width="100%"
              height="350px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
            />
          </Container>
        </section>

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
                        +45 31 51 24 10
                      </li>
                      <li>
                        <img src={timing} alt="Timings" />
                        10:00 AM – 18:00 PM
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
                        binibini09@yahoo.com
                      </li>
                      <li>
                        <img src={facebook} alt="Facebook Link" />
                        facebook.com/pg/wintaafricantouch/
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
      </main>

      <footer>
        <section>
          <Container className="text-center pt-3 pb-3">
            All rights reserved Copyright @ 2020.
          </Container>
        </section>
      </footer>
    </>
  );
}

export default App;
