import React, { useEffect, useState } from 'react'
import HomeNavbarAuth from '../../components/navbar/home-navbar-auth/HomeNavbarAuth'
import { Button, Modal, Row, Container, Col } from 'react-bootstrap';
import AddScreenyContainer from '../../components/screeny-container/addScreenyContainer/AddScreenyContainer';
import {AiOutlinePlusSquare} from 'react-icons/ai'
import axios from 'axios'
import useSession from '../../hooks/useSession'
import SingleScreenyContainer from '../../components/screeny-container/singleScreenyContainer/SingleScreenyContainer';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux'
import {setIsLoading} from '../../reducers/screeny'

function Administration() {
    const isLoading = useSelector((state) => state.screen.isLoading)

    const [screenyContainerList, setScreenyContainerList] = useState([])

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const session = useSession()

    const handleClose = () => {
        setShow(false);
        dispatch(setIsLoading(!isLoading))
    }
    const handleShow = () => setShow(true);

    const getScreenyContainerList = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/containers/${session.id}`)
          setScreenyContainerList(response.data.container)
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
        getScreenyContainerList()
        
    }, [isLoading])

    return (
        <>
            <HomeNavbarAuth />
            <h1>Screeny Container List</h1>
            <Container fluid="lg">
                <Row >
                    <Button size="lg" style={{marginTop: "1rem", marginBottom: "1rem"}}variant="warning" onClick={handleShow}>Add New Screeny Container <AiOutlinePlusSquare /></Button>
                </Row>
            </Container>
            <Container>
                <Col>
                    {screenyContainerList && screenyContainerList.map((container) => {
                        return (
                        <Row key={nanoid()}>
                            <SingleScreenyContainer screeny={container}/>
                        </Row>
                        )
                    })}
                </Col>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Screeny Container</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddScreenyContainer fun={handleClose}/>
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