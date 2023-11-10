import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleScreenyContainer from '../singleScreenyContainer/SingleScreenyContainer'
import { nanoid } from '@reduxjs/toolkit'
import { setIsLoading } from '../../../reducers/screeny'
import { useDispatch, useSelector } from 'react-redux'
import useSession from '../../../hooks/useSession'
import { Container, Row, Col } from 'react-bootstrap'


const ScreenyContainer = () => {

    const session = useSession()

    const isLoading = useSelector((state) => state.isLoading)
    const [screenyContainerList, setScreenyContainerList] = useState([])
    const dispatch = useDispatch()

    const getScreenyContainerList = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/containers/${session.id}`)
          setScreenyContainerList(response.data.container)
          console.log(`Container state: ${screenyContainerList}`);
          dispatch(setIsLoading(!isLoading))
          //console.log(response.data.comments);
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
        getScreenyContainerList()
    }, [isLoading])
    
    return (
        <> 
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
        </>
    )
}

export default ScreenyContainer