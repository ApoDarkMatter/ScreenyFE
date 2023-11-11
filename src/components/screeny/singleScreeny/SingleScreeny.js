import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {AiOutlineDelete} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../../reducers/screeny';
import axios from 'axios';

const SingleScreeny = (screen) => {

    console.log(screen);

    const isLoading = useSelector((state) => state.screen.isLoading)
    const dispatch = useDispatch()

    const deleteContainer = async () => {
        try {
          await axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/screen/${screen._id}`)
          console.log("Screen deleted succesfully");
          dispatch(setIsLoading(!isLoading))
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={screen.screen.imgUrl} />
            <Card.Body>
            <Card.Title>{screen.screen.text}</Card.Title>
            <Button 
                    style={{width: "100%"}} 
                    variant="danger"
                    onClick={deleteContainer}
                    >Delete <AiOutlineDelete/></Button>
            </Card.Body>
        </Card>
    </>  
    )
}

export default SingleScreeny