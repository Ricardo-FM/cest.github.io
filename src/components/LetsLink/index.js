import React from 'react';
import Button from 'react-bootstrap/Button';
import BgImage from '../../assets/img/CBE-Pttern.jpg';
import { Container, Col, Row } from 'react-bootstrap';

function LetsLink() {
    return (
        <div style={{backgroundImage:`url(${BgImage})`, backgroundPosition: "right", height: "275px"}}>
            <Container fluid="md">
                <Row>
                    <Col></Col>
                    <Col md="10" style={{paddingTop: "5%"}}>
                        <Row>
                            <Col md="6">
                                <hr />
                                <h1 style={{color: "#939598"}}>
                                    Let's Link
                                </h1>
                                <p style={{color: "#939598", letterSpacing: "1.5pt"}}>
                                    We'd love to hear more about how we can turn your vision into a celebration!
                                </p>
                            </Col>
                            <Col style={{textAlign: "right", paddingTop: "10%"}}>
                                <Button variant="dark">
                                    CONTACT
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LetsLink;