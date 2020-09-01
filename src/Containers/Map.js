import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from "react-iframe";

function App() {
  return (
    <section id="Visit-Us">
      <Container fluid>
        <Row>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.8621822692394!2d12.55331442048524!3d55.69138379353184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253abbd9f2ba7%3A0x91ac5ed8751a7666!2sWinta%20African%20Touch!5e0!3m2!1sen!2sdk!4v1596900514645!5m2!1sen!2sdk"
            width="100%"
            height="350px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </Row>
      </Container>
    </section>
  );
}

export default App;
