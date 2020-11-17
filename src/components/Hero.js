import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';


const Hero = (props) => {

    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col>
                        {props.title && <h1>{props.title}</h1>}
                        {props.subTitle && <h3>{props.subTitle}</h3>}
                        {props.text && <h3>{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;