import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import './style.css'

const WhatIs = () => {
  return (
    <>
    <Container>
        <h2>What is Screeny?</h2>
        <Row>
            <Col xs={12} lg={4} className="g-4">
                <Card className="column">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>A way to comunicate directly with your client</Card.Title>
                    <Card.Text>
                        In a waiting room, in a pub, in a restorant, a new way to give information to your clients!
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={4} className="g-4">
                <Card className="column">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Multi platform ADS displayer</Card.Title>
                    <Card.Text>
                        A smartphone, a tablet, a smart tv! The only necessary things are a device with a browser and internet connection!
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={4} className="g-4">
                <Card className="column">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>More to come...!</Card.Title>
                    <Card.Text>
                        Screeny is always in improvements mode! New awesome features will come!
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>    
    </Container>
    </>
  )
}

export default WhatIs