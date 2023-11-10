import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { isAuth } from '../../../middlewares/ProtectedRoutes'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
//import Subscribe from '../subscribe/subscribe';
import Subscribe from '../../subscribe/Subscribe'
import { Modal } from 'react-bootstrap';

const HomeNavbar = () => {

    const [loginData, setLoginData] = useState({})
    const [login, setLogin] = useState(null)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, JSON.stringify(loginData), { headers: { "Content-Type": "application/json" } })

            if (response.data.token) {
                localStorage.setItem('loggedInUser',JSON.stringify(response.data.token))
                navigate('/administration')
            }

            setLogin(response.data)
        } catch (error) {
            console.log(error)
            alert('Mail or Password not valid')
        }
    }

    useEffect(() => {
      if(isAuth) {
        navigate('/')
      }
    }, [])

        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Screeny</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                            >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Start your screeny!</Nav.Link>
                        </Nav>
                        <Form className="d-flex" onSubmit={onSubmit}>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="me-2"
                                required
                                aria-label="Email"
                                onChange={handleInputChange}
                            />
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="me-2"
                                required
                                aria-label="Password"
                                onChange={handleInputChange} 
                            />
                            <Button
                                type="submit"
                            >Login</Button>
                            <Button variant="warning" onClick={handleShow}>
                                Subscribe
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Subscribe New User</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Subscribe />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

export default HomeNavbar