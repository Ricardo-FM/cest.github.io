import React from "react";
import { Col, Row, Container } from "react-bootstrap";

const Gallery = () => {
  return (
    <Container fluid style={{backgroundColor: "#000", color: "#fff"}}>
      <Row>
        <Col></Col>
        <Col md="10" style={{paddingLeft: "12%", paddingRight: "12%", paddingTop: "50px"}}>
            <hr style={{backgroundColor: "#fff", color: "#fff"}}/>
            <h2 style={{fontSize: "50px", paddingBottom: "25px"}}>
                Gallery
            </h2>
        </Col>
        <Col></Col>
      </Row>
      <Row>
          <Col></Col>
          <Col md="10" style={{paddingLeft: "12%", paddingRight: "12%", paddingBottom: "50px"}}>
          </Col>
          <Col></Col>
      </Row>
    </Container>
  );
};

export default Gallery;
