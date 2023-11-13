import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import screeny from './assets/screeny.png'
import './style.css'

const HomeMainImage = () => {
  return (
    <>
      <Row style={{backgroundColor:"#0C52B2"}}>
          <Image src={screeny} className="Image"/>
      </Row>
    </>
  )
}

export default HomeMainImage