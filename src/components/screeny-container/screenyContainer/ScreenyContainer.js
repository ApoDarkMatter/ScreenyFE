import React, { useEffect } from 'react'
import SingleScreenyContainer from '../singleScreenyContainer/SingleScreenyContainer'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import { Container, Row, Col } from 'react-bootstrap'


const ScreenyContainer = ({allScreeny}) => {

    const isLoading = useSelector((state) => state.isLoading)

    useEffect(() => {
        
    }, [isLoading])
    
    return (
        <> 
          <Container>
            <Col>
              {allScreeny && allScreeny.map((container) => {
                return (
                  <Row key={nanoid()}>
                    <SingleScreenyContainer screeny={container}/>
                  </Row>
                )
              })}
            </Col>
          </Container>
        </>
    )
}

export default ScreenyContainer