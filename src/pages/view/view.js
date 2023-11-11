import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Carousel, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const View = () => {
    const {id} = useParams()

    const [code, setCode] = useState("")
    const [screenyList, setScreenyList] = useState([])
    const [screenContainer, setScreenContainer] = useState([])

    const getScreenyList = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/containers/viewCode/${id}`)
        console.log(response.data.codes);
        setScreenContainer(response.data.codes)
        try {
          const responseAllScreen = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/screen/${screenContainer._id}`)
          console.log(responseAllScreen.data.screens);
          setScreenyList(responseAllScreen.data.screens)
        } catch (e) {
          console.log(e)
        }
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      if(id) {
        getScreenyList()
      }
    }, [])

    if(!id) {
      return (
        <>
            <div>View With NOCODE</div>
            <Form.Group controlId="blog-form" className="mt-3">
              <Form.Label>Screeny Code</Form.Label>
                  <Form.Control
                      size="lg"
                      placeholder="Screeny Code"
                      type="number"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                  />
            </Form.Group>
            <Button 
              as={Link}
              to={`/view/${code}`}>Start Screeny!</Button>
        </>
      )
    } else {
      return (
        <>
            <div>View With Code</div>
            <Carousel interval="5000">
              {screenyList && screenyList.map((screeny) => {
                return (
                  <Carousel.Item key={nanoid()}>
                      <img src={screeny.imgUrl}/>
                      <Carousel.Caption>
                        <h3>{screeny.text}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                )
              })}
            </Carousel>
        </>
      )
    }
}

export default View