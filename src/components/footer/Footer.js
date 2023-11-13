import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './style.css'

const Footer = () => {
  return (
    <>
        <Row style={{backgroundColor:"#0B5ED7", textAlign:"center", paddingTop:"1rem", margin:"0"}}>
            <Col xs={1} lg={3}></Col>
            <Col xs={10} lg={6}>
                <h3 className="whiteText">Screeny</h3>
                <p className="whiteText">All Right Reserved - Apolloni Andrea - <a href="https://apolloniandrea.com/card" className="whiteText">My Website</a></p>
            </Col>
            <Col xs={1} lg={3}></Col>
        </Row>
    </>
  )
}

export default Footer