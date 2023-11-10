import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiOutlinePlaySquare, AiOutlineDelete} from 'react-icons/ai';
import {PiPencilCircleThin} from 'react-icons/pi';
import {BsPencil} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { Container, Row, Col, Modal, Form } from 'react-bootstrap';
import axios from 'axios';


const SingleScreenyContainer = (screeny) => {

  const [show, setShow] = useState(false);
  const [name, setName] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setName(containerName)
    setShow(true);
  }

  console.log(screeny)
  const {_id, containerName, viewCode} = screeny.screeny

  const deleteContainer = async () => {
      try {
        await axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/containers/${_id}`)
        console.log("Container deleted succesfully");
      } catch (error) {
        console.log(error);
      }
    }

  const modifyName = async () => {
    event.preventDefault()

    try {
      const response = await axios.patch(`${process.env.REACT_APP_SERVER_BASE_URL}/containers/${_id}`,{containerName: name})
      console.log("Containers name modified correctly:", response.data);
      handleClose()
    } catch (error) {
      console.log("Error:", error);
    }

  }

  return (
    <>
    <Card style={{marginBottom: '1rem' }}>
        <Card.Body>
            <IconContext.Provider value={{ color: "black", size:"1rem"}}>
              <Card.Title><Button variant="light" onClick={handleShow}><BsPencil/></Button> {containerName}</Card.Title>
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
                      >Modify Screeny <PiPencilCircleThin /></Button>
                </Col>
                <Col>
                  <Button 
                    style={{width: "100%", margin: '0.5rem'}} 
                    variant="danger"
                    onClick={deleteContainer}
                    >Delete <AiOutlineDelete/></Button>
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

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modify Container Name</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>New Container Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={modifyName}>
        Save Changes
      </Button>
    </Modal.Footer>
    </Modal>
    </>
  )
}

export default SingleScreenyContainer
