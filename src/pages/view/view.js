import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Carousel, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "./style.css"
import {AiOutlineHome} from 'react-icons/ai'
import HomeNavbar from '../../components/navbar/home-navbar/HomeNavbar';
import HomeNavbarAuth from '../../components/navbar/home-navbar-auth/HomeNavbarAuth';
import StartScreeny from '../../components/start-screeny/StartScreeny';
import Footer from '../../components/footer/Footer';

const View = () => {
    const {id} = useParams()

    const [screenyList, setScreenyList] = useState([])

    const getScreenyList = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/containers/viewCode/${id}`)
        console.log("First Api Call");
        const responseAllScreen = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/screen/${response.data.codes._id}`)
        console.log("Second Api Call");
        setScreenyList(responseAllScreen.data.screens)
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
      if(localStorage.getItem('loggedInUser')) {
        return (
            <>
              <HomeNavbarAuth/>
              <Row className="bg100">
                <StartScreeny/>
              </Row>
              <Footer/>
            </>
        )
    } else {
        return (
            <>
              <HomeNavbar/>
              <Row className="bg100">
                <StartScreeny />
              </Row>
              <Footer/>
            </>
        )
    }
    } else {
      return (
        <>
            <Carousel interval="5000" pause="false" controls="false">
              {screenyList && screenyList.map((screeny) => {
                return (
                  <Carousel.Item key={nanoid()}>
                      <img className="carouselImage" src={screeny.imgUrl}/>
                      <Carousel.Caption>
                        <h3>{screeny.text}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                )
              })}
            </Carousel>
            <Button 
              variant="outline-light" 
              className="menuButton"
              as={Link}
              to={`/`}
            ><AiOutlineHome/></Button>{' '}
        </>
      )
    }
}

export default View