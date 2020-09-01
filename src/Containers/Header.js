import React from "react";
import logo from "./../assets/wintalogo.png";
import { Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
// import Iframe from "react-iframe";

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

    </>
  );
}

export default App;
