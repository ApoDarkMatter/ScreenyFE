import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddScreeny from '../../components/screeny/addScreeny/AddScreeny'
import { Col, Container, Row } from 'react-bootstrap'
import SingleScreeny from '../../components/screeny/singleScreeny/SingleScreeny'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import Footer from '../../components/footer/Footer'

const Screeny = () => {

    const {id} = useParams()
    console.log(id);

    const isLoading = useSelector((state) => state.screen.isLoading)
    const [screenyList, setScreenyList] = useState([])

    const getScreenyList = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/screen/${id}`)
        console.log(response.data);
        setScreenyList(response.data.screens)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getScreenyList()
    }, [isLoading])
    

    if(!id) {
      return (
        <>
            <div>screeny With NOCODE</div>
        </>
      )
    } else {
      return (
        <>
            <AddScreeny screenyId={id}/>
            <Container style={{paddingBottom:"1rem"}}>
              <h2>Screeny Already Inside This Container</h2> 
              <Row>

                    {screenyList && screenyList.map((screen) => {
                        return (
                        <Col xl={3} md={6} sm={12} key={nanoid()}>
                              <SingleScreeny screen={screen}/>
                        </Col>
                        )
                    })}

              </Row>
            </Container>
            <Footer/>
        </>
      )
    }

}

export default Screeny