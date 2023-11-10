import React, { useState } from 'react'
import HomeNavbarAuth from '../../components/home-navbar-auth/HomeNavbarAuth'
import { Button, Modal } from 'react-bootstrap';
import AddScreenyContainer from '../../components/addScreenyContainer/AddScreenyContainer';
import ScreenyContainer from '../../components/screenyContainer/ScreenyContainer';

function Administration() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <HomeNavbarAuth />
        <h1>Screeny Container List</h1>
        <Button variant="warning" onClick={handleShow}>
            Add Screeny Container
        </Button>
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