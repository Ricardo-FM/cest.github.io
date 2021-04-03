import React from 'react';
import LetsLink from '../LetsLink';
import './style.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Footer() {
    return (
        <div className="black-bg">
          <LetsLink />
          <Container fluid>
            <Navbar style={{paddingLeft: "20%", paddingRight: "20%"}} variant="dark" className="nav-a">
              <Nav className="mr-auto icon">
                <Nav.Link href="https://www.facebook.com/cestbelleeventplanning/" style={{marginRight: "10px"}}><i className="fab fa-facebook-f"></i></Nav.Link>
                <Nav.Link href="https://www.instagram.com/cest.belle.events/" style={{marginRight: "10px"}}><i className="fab fa-instagram"></i></Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </div>
      );
}

export default Footer;