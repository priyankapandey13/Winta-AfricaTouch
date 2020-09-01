import React from "react";
import banner from "./../assets/banner.jpg";
import { Container, Row } from "react-bootstrap";

function App() {
  return (
    <section className="bannerarea">
      <Container fluid>
        <Row>
          <img src={banner} className="" alt="banner" />
        </Row>
      </Container>
    </section>
  );
}

export default App;
