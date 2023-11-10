import React, { useState } from 'react'
import HomeNavbarAuth from '../../components/navbar/home-navbar-auth/HomeNavbarAuth'
import { Button, Modal, Row, Container } from 'react-bootstrap';
import AddScreenyContainer from '../../components/screeny-container/addScreenyContainer/AddScreenyContainer';
import ScreenyContainer from '../../components/screeny-container/screenyContainer/ScreenyContainer';

function Administration() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <HomeNavbarAuth />
        <h1>Screeny Container List</h1>
        <Container fluid="lg">
            <Row >
                <Button style={{marginTop: "1rem", marginBottom: "1rem"}}variant="warning" onClick={handleShow}>Add Screeny Container</Button>
            </Row>
        </Container>
        <ScreenyContainer />
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Screeny Container</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddScreenyContainer/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    
  )
}

export default Administration