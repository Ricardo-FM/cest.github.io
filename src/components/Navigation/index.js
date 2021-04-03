import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/img/CBE-Logo.png';

function Navigation() {
  return (
    <div className="black-bg">
      <Container fluid>
        <Navbar style={{paddingLeft: "20%", paddingRight: "20%"}} variant="dark" className="nav-a">
          <Navbar.Brand href="/">
          <img src={Logo} alt="C'est Belle Events" />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{marginRight: "10px"}}>Intro</Nav.Link>
            <Nav.Link href="/" style={{marginRight: "10px"}}>Home</Nav.Link>
            <Nav.Link href="/" style={{marginRight: "10px"}}>Services</Nav.Link>
            <Nav.Link href="/" style={{marginRight: "10px"}}>The Team</Nav.Link>
            <Nav.Link href="/" style={{marginRight: "10px"}}>Gallery</Nav.Link>
            <Nav.Link href="/">Let's Link</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigation;
