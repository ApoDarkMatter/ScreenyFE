import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiOutlinePlaySquare} from 'react-icons/ai';
import {BsPencil} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { Container, Row, Col } from 'react-bootstrap';

const SingleScreenyContainer = (screeny) => {

  console.log(screeny)
  const {_id, containerName, viewCode} = screeny.screeny
  return (
    <Card style={{marginBottom: '1rem' }}>
        <Card.Body>
            <IconContext.Provider value={{ color: "black", size:"1rem"}}>
              <Card.Title><Link to=""><BsPencil/></Link> {containerName}</Card.Title>
            </IconContext.Provider>
            <Card.Text>
              Screeny Code: {viewCode}
            </Card.Text>
            <Container>
              <Row>
                <Col>
                  <Button 
                    style={{width: "100%", margin: '0.5rem'}} 
                    variant="warning"
                    as={Link}
                    to={`/screeny/${_id}`}
                      >Modify Screeny</Button>
                </Col>
                <Col>
                  <Button style={{width: "100%", margin: '0.5rem'}} variant="danger">Delete</Button>
                </Col>
              </Row>
              <Row>
                <Button 
                  style={{margin: '0.5rem'}}
                  variant="success" 
                  as={Link}
                  to={`/view/${viewCode}`}>Start <AiOutlinePlaySquare/>
                </Button>
              </Row>
            </Container>
        </Card.Body>
    </Card>
  )
}

export default SingleScreenyContainer
