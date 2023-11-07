import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const HomeNavbar = () => {
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
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        className="me-2"
                        aria-label="Email"
                    />
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className="me-2"
                        aria-label="Password"
                    />
                    <Button variant="success">Login</Button>
                    <Button variant="warning">Subscribe</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default HomeNavbar