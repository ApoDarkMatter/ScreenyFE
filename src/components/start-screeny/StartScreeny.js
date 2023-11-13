import React, { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function StartScreeny() {

    const [code, setCode] = useState("")
 
 
    return (
        <>
            <h2>Start Your Screeny Now!</h2>
            <Row style={{backgroundColor:"#ffca2c", textAlign:"center", padding:"7rem"}}>
                <Col xs={8} lg={4}>

                </Col>
                <Col xs={8} lg={4}>
                    <Form.Group>
                        <Form.Control
                            size="lg"
                            placeholder="Screeny Code"
                            type="number"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <Button 
                            as={Link}
                            to={`/view/${code}`}>Start Screeny!
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
        </>
  )
}

export default StartScreeny