import React from "react";
// import logo from "./../assets/wintalogo.png";
// import banner from "./../assets/banner.jpg";
// import { Container, Row} from "react-bootstrap";
import { Container, Row, Col, Card} from "react-bootstrap";
import product01 from "../assets/prod01.jpg";
import product02 from "../assets/prod02.jpg";
import product03 from "../assets/prod03.jpg";
import product04 from "../assets/prod04.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
// import Iframe from "react-iframe";

function App() {
  return (
    <>
      <section id="Our-Products">
          <Container className="pt-5 pb-5 mt-4 mb-3 pb-4 text-center">
              <h3 className="mb-3">Our Products</h3>
              <p>
                Your beauty is our duty!! Winta Africa Touch is a cosmetics
                beauty company with many different types of cosmetics. We have
                international brand name cosmetic products, such as: Forex,
                Cantu Shea, Castro oil, Blue magic and many more. We also have a
                large selection of hairs, e.g. Wig afro short, Wig semi and Wig
                cool.
              </p>
              <Row>
              <Col xs={12} md={4} lg={3} xl={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={product01} />
                <Card.Body>
                  <Card.Title className="text-center">
                    Texture Softner
                  </Card.Title>
                </Card.Body>
                </Card>
                </Col>
                <Col  xs={12} md={4} lg={3} xl={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={product02} />
                <Card.Body>
                  <Card.Title className="text-center">Jebena</Card.Title>
                </Card.Body>
              </Card>
              </Col>
              <Col  xs={12} md={4} lg={3} xl={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={product03} />
                <Card.Body>
                  <Card.Title className="text-center">dabo mesob</Card.Title>
                </Card.Body>
              </Card>
              </Col>
              <Col  xs={12} md={4} lg={3} xl={3} className="mb-3">
              <Card>
                <Card.Img variant="top" src={product04} />
                <Card.Body>
                  <Card.Title className="text-center">
                    ORS- olive oil
                  </Card.Title>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Container>
        </section>
    </>
  );
}

export default App;
