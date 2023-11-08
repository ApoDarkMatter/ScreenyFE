import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'
import useSession from '../../hooks/useSession';

const HomeNavbarAuth = () => {

    const session = useSession()

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
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
                    <Form className="d-flex">
                        <p>Hi {session.shopName}</p>
                        <Button 
                            onClick={logout}
                        >Logout</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomeNavbarAuth