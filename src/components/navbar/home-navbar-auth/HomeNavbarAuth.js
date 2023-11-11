import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import useSession from '../../../hooks/useSession'
import "./style.css"

const HomeNavbarAuth = () => {

    const session = useSession()

    const logout = () => {
        localStorage.removeItem('loggedInUser')
    }

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
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/view">Start your screeny!</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Navbar.Text style={{marginRight:"1rem"}}>Hi <b>{session.shopName}</b></Navbar.Text>
                        <Button style={{marginRight:"1rem"}} as={Link} to="/administration" variant="warning">Go to Administration</Button>
                        <Button 
                            onClick={logout}
                        ><a href="/" className="link">Logout</a></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomeNavbarAuth