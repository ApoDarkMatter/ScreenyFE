import React, { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {AiOutlinePlaySquare} from 'react-icons/ai';


function StartScreeny() {

    const [code, setCode] = useState("")
 
    return (
        <>
            <Row style={{backgroundColor:"#ffca2c", textAlign:"center", marginTop:"1rem", paddingBottom:"5rem", marginRight:"0"}}>
                <h2 style={{paddingBottom:"3rem"}}>Start Your Screeny Now!</h2>
                <Col xs={1} lg={3}></Col>
                <Col xs={10} lg={6}>
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
                            to={`/view/${code}`}
                            style={{marginTop:"1rem"}}
                            variant="success">Start Screeny! <AiOutlinePlaySquare/>
                        </Button>
                    </Form.Group>
                </Col>
                <Col xs={1} lg={3}></Col>
            </Row>
        </>
  )
}

export default StartScreeny