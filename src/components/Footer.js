import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer(){

    return(
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row>
                    <Col className='p-0' md={3} sm={12}>
                        David Chung
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}

export default Footer;
