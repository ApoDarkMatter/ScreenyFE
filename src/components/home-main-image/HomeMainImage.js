import React from 'react'
import { Row, Image } from 'react-bootstrap'
import screeny from './assets/screeny.png'
import './style.css'

const HomeMainImage = () => {
  return (
    <>
      <Row style={{backgroundColor:"#0C52B2", margin:"0"}}>
          <Image src={screeny} className="Image"/>
      </Row>
    </>
  )
}

export default HomeMainImage